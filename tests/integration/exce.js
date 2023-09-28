
/* 

  npm run test-i <args>
  -> playwright test <args>

  args:
    allow-ui: --ui
    headed: --headed
    file=<file-name>: file-name

    all-projects:
        or
    chromium: --project=chromium
    firefox: --project=firefox
    safari: --project=safari

  npm run test-i report
  -> playwright show-report

*/


import { exec, spawn } from 'child_process';


const args = process.argv.slice(2)


const testArgsObj = {
  'ui': '--ui',
  'headed': '--headed',
}

const projectsObj = {
  'chromium': '--project=chromium',
  'firefox': '--project=firefox',
  'safari': '--project=safari',
  'all-projects': '',
}

if (args[0] === 'report') {
  report()  
}
else {
  tests(args)
}

function report () {
  console.log('> playwright show-report')
  exec('playwright show-report', (error, stdout, stderr) => {

    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
  
    if (stderr) {
      console.error(stderr);
      return;
    }
  
    console.log(stdout);
  })
}

async function tests (args) {

  await createBuild()

  console.log('build created')

  const previewProcess = await getPreviewProcess()

  console.log('the preview is running')

  const scriptArgs = getTestScript(args)

  console.log(`> ${scriptArgs.join(' ')}`)

  const testProcess = spawn('playwright.cmd', scriptArgs);

  testProcess.on('exit', () => {
    process.exit()
  })

  process.on('SIGINT', () => {
    testProcess.kill('SIGINT');
    previewProcess.kill('SIGINT');
  });

  process.on('exit', () => {
    testProcess.kill('SIGINT');
    previewProcess.kill('SIGINT');
  })

  testProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

}


function createBuild() {

  return new Promise((resolve, reject) => {

    exec('npm run build', (error, stdout, stderr) => {

      console.log(error, stdout, stderr)

      if (error) {
        reject(`Error: ${error.message}`);
        return;
      }
  
      if (stderr) {
        reject(stderr);
        return;
      }

      resolve()
    })
  })
}


function getPreviewProcess() {

  return new Promise((resolve, reject) => {

    try {
      const previewProcess = spawn('npm.cmd', ['run', 'preview']);
  
      previewProcess.on('error', (args) => {
        console.log(args)
        reject(args)
      })

      previewProcess.stdout.on('data', () => {
        resolve(previewProcess);
      });
    }
    catch (e) {
      reject(e)
    }
  })
}


function getTestScript (args) {

  let file = 'tests/integration/'
  let project = projectsObj.chromium
  const testArgsArray = (
    args
    .map(arg => {
  
      if (projectsObj[args]) {
        project = projectsObj[args]
      }

      if (arg.indexOf('file=') > -1) {
        file = arg.slice(5)
      }
  
      return testArgsObj[arg] || ''
    })
    .filter(arg => arg)
  )

  const testArgs = testArgsArray.join(' ')
  const script = ['test', file, testArgs, project]

  return script
}

