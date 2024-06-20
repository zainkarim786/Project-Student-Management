var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var readline = require('readline');
var StudentManagement = /** @class */ (function () {
    function StudentManagement() {
        this.students = [];
        this.nextId = 1;
    }
    StudentManagement.prototype.addStudent = function (name, age, grade) {
        var student = { id: this.nextId++, name: name, age: age, grade: grade };
        this.students.push(student);
        console.log("Added student: ".concat(name));
    };
    StudentManagement.prototype.removeStudent = function (id) {
        var index = this.students.findIndex(function (student) { return student.id === id; });
        if (index !== -1) {
            var removedStudent = this.students.splice(index, 1)[0];
            console.log("Removed student: ".concat(removedStudent.name));
        }
        else {
            console.log("Student with id ".concat(id, " not found."));
        }
    };
    StudentManagement.prototype.updateStudent = function (id, name, age, grade) {
        var student = this.students.find(function (student) { return student.id === id; });
        if (student) {
            if (name)
                student.name = name;
            if (age)
                student.age = age;
            if (grade)
                student.grade = grade;
            console.log("Updated student: ".concat(student.name));
        }
        else {
            console.log("Student with id ".concat(id, " not found."));
        }
    };
    StudentManagement.prototype.listStudents = function () {
        console.log("Student List:");
        this.students.forEach(function (student) {
            console.log("".concat(student.id, ". ").concat(student.name, ", Age: ").concat(student.age, ", Grade: ").concat(student.grade));
        });
    };
    return StudentManagement;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var studentManagement = new StudentManagement();
var askQuestion = function (question) {
    return new Promise(function (resolve) { return rl.question(question, resolve); });
};
var showMenu = function () {
    console.log("\nMenu:");
    console.log("1. Add student");
    console.log("2. Remove student");
    console.log("3. Update student");
    console.log("4. List students");
    console.log("5. Exit");
    rl.question('Choose an option: ', function (option) {
        handleOption(option);
    });
};
var handleOption = function (option) { return __awaiter(_this, void 0, void 0, function () {
    var _a, name_1, ageStr, grade, age, removeIdStr, removeId, updateIdStr, updateId, newName, newAgeStr, newGrade, newAge;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = option;
                switch (_a) {
                    case '1': return [3 /*break*/, 1];
                    case '2': return [3 /*break*/, 5];
                    case '3': return [3 /*break*/, 7];
                    case '4': return [3 /*break*/, 14];
                    case '5': return [3 /*break*/, 15];
                }
                return [3 /*break*/, 16];
            case 1: return [4 /*yield*/, askQuestion('Enter student name: ')];
            case 2:
                name_1 = _b.sent();
                return [4 /*yield*/, askQuestion('Enter student age: ')];
            case 3:
                ageStr = _b.sent();
                return [4 /*yield*/, askQuestion('Enter student grade: ')];
            case 4:
                grade = _b.sent();
                age = parseInt(ageStr, 10);
                if (isNaN(age)) {
                    console.log('Please enter a valid age.');
                }
                else {
                    studentManagement.addStudent(name_1, age, grade);
                }
                showMenu();
                return [3 /*break*/, 17];
            case 5: return [4 /*yield*/, askQuestion('Enter student id to remove: ')];
            case 6:
                removeIdStr = _b.sent();
                removeId = parseInt(removeIdStr, 10);
                if (isNaN(removeId)) {
                    console.log('Please enter a valid student id.');
                }
                else {
                    studentManagement.removeStudent(removeId);
                }
                showMenu();
                return [3 /*break*/, 17];
            case 7: return [4 /*yield*/, askQuestion('Enter student id to update: ')];
            case 8:
                updateIdStr = _b.sent();
                updateId = parseInt(updateIdStr, 10);
                if (!isNaN(updateId)) return [3 /*break*/, 9];
                console.log('Please enter a valid student id.');
                return [3 /*break*/, 13];
            case 9: return [4 /*yield*/, askQuestion('Enter new name (leave empty to keep current): ')];
            case 10:
                newName = _b.sent();
                return [4 /*yield*/, askQuestion('Enter new age (leave empty to keep current): ')];
            case 11:
                newAgeStr = _b.sent();
                return [4 /*yield*/, askQuestion('Enter new grade (leave empty to keep current): ')];
            case 12:
                newGrade = _b.sent();
                newAge = newAgeStr ? parseInt(newAgeStr, 10) : undefined;
                if (newAgeStr && isNaN(newAge)) {
                    console.log('Please enter a valid age.');
                }
                else {
                    studentManagement.updateStudent(updateId, newName || undefined, newAge, newGrade || undefined);
                }
                _b.label = 13;
            case 13:
                showMenu();
                return [3 /*break*/, 17];
            case 14:
                studentManagement.listStudents();
                showMenu();
                return [3 /*break*/, 17];
            case 15:
                rl.close();
                return [3 /*break*/, 17];
            case 16:
                console.log('Invalid option, please try again.');
                showMenu();
                return [3 /*break*/, 17];
            case 17: return [2 /*return*/];
        }
    });
}); };
showMenu();
