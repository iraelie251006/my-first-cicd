console.log('🧪 Running tests...');

// Test 1: Check if HTML file exists
const fs = require('fs');
const path = require('path');

function testFileExists(filename) {
    try {
        const filePath = path.join(__dirname, filename);
        if (fs.existsSync(filePath)) {
            console.log(`✅ ${filename} exists`);
            return true;
        } else {
            console.log(`❌ ${filename} is missing`);
            return false;
        }
    } catch (error) {
        console.log(`❌ Error checking ${filename}: ${error.message}`);
        return false;
    }
}

// Test 2: Check if HTML contains required elements
function testHTMLContent() {
    try {
        const htmlContent = fs.readFileSync('index.html', 'utf8');
        const requiredElements = ['taskInput', 'taskList', 'addTask'];
        let allFound = true;
        
        requiredElements.forEach(element => {
            if (htmlContent.includes(element)) {
                console.log(`✅ HTML contains ${element}`);
            } else {
                console.log(`❌ HTML missing ${element}`);
                allFound = false;
            }
        });
        
        return allFound;
    } catch (error) {
        console.log(`❌ Error reading HTML file: ${error.message}`);
        return false;
    }
}

// Test 3: Check if JavaScript has basic functions
function testJavaScriptContent() {
    try {
        const jsContent = fs.readFileSync('script.js', 'utf8');
        const requiredFunctions = ['addTask', 'deleteTask', 'renderTasks'];
        let allFound = true;
        
        requiredFunctions.forEach(func => {
            if (jsContent.includes(`function ${func}`)) {
                console.log(`✅ JavaScript contains ${func} function`);
            } else {
                console.log(`❌ JavaScript missing ${func} function`);
                allFound = false;
            }
        });
        
        return allFound;
    } catch (error) {
        console.log(`❌ Error reading JavaScript file: ${error.message}`);
        return false;
    }
}

// Run all tests
console.log('\n📋 Test Results:');
console.log('================');

let testsPasssed = 0;
let totalTests = 0;

// File existence tests
totalTests++;
if (testFileExists('index.html')) testsPasssed++;

totalTests++;
if (testFileExists('style.css')) testsPasssed++;

totalTests++;
if (testFileExists('script.js')) testsPasssed++;

// Content tests
totalTests++;
if (testHTMLContent()) testsPasssed++;

totalTests++;
if (testJavaScriptContent()) testsPasssed++;

console.log(`\n🎯 Tests passed: ${testsPasssed}/${totalTests}`);

if (testsPasssed === totalTests) {
    console.log('🎉 All tests passed! Your app is ready for CI/CD!');
    process.exit(0);
} else {
    console.log('💥 Some tests failed. Please fix the issues above.');
    process.exit(1);
}