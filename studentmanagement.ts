const readline = require('readline');

interface Student {
    id: number;
    name: string;
    age: number;
    grade: string;
}

class StudentManagement {
    private students: Student[] = [];
    private nextId: number = 1;

    addStudent(name: string, age: number, grade: string): void {
        const student: Student = { id: this.nextId++, name, age, grade };
        this.students.push(student);
        console.log(`Added student: ${name}`);
    }

    removeStudent(id: number): void {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            console.log(`Removed student: ${removedStudent.name}`);
        } else {
            console.log(`Student with id ${id} not found.`);
        }
    }

    updateStudent(id: number, name?: string, age?: number, grade?: string): void {
        const student = this.students.find(student => student.id === id);
        if (student) {
            if (name) student.name = name;
            if (age) student.age = age;
            if (grade) student.grade = grade;
            console.log(`Updated student: ${student.name}`);
        } else {
            console.log(`Student with id ${id} not found.`);
        }
    }

    listStudents(): void {
        console.log("Student List:");
        this.students.forEach(student => {
            console.log(`${student.id}. ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
        });
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const studentManagement = new StudentManagement();

const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => rl.question(question, resolve));
};

const showMenu = () => {
    console.log("\nMenu:");
    console.log("1. Add student");
    console.log("2. Remove student");
    console.log("3. Update student");
    console.log("4. List students");
    console.log("5. Exit");
    rl.question('Choose an option: ', (option: string) => {
        handleOption(option);
    });
};

const handleOption = async (option: string) => {
    switch (option) {
        case '1':
            const name = await askQuestion('Enter student name: ');
            const ageStr = await askQuestion('Enter student age: ');
            const grade = await askQuestion('Enter student grade: ');
            const age = parseInt(ageStr, 10);
            if (isNaN(age)) {
                console.log('Please enter a valid age.');
            } else {
                studentManagement.addStudent(name, age, grade);
            }
            showMenu();
            break;
        case '2':
            const removeIdStr = await askQuestion('Enter student id to remove: ');
            const removeId = parseInt(removeIdStr, 10);
            if (isNaN(removeId)) {
                console.log('Please enter a valid student id.');
            } else {
                studentManagement.removeStudent(removeId);
            }
            showMenu();
            break;
        case '3':
            const updateIdStr = await askQuestion('Enter student id to update: ');
            const updateId = parseInt(updateIdStr, 10);
            if (isNaN(updateId)) {
                console.log('Please enter a valid student id.');
            } else {
                const newName = await askQuestion('Enter new name (leave empty to keep current): ');
                const newAgeStr = await askQuestion('Enter new age (leave empty to keep current): ');
                const newGrade = await askQuestion('Enter new grade (leave empty to keep current): ');
                const newAge = newAgeStr ? parseInt(newAgeStr, 10) : undefined;
                if (newAgeStr && isNaN(newAge)) {
                    console.log('Please enter a valid age.');
                } else {
                    studentManagement.updateStudent(updateId, newName || undefined, newAge, newGrade || undefined);
                }
            }
            showMenu();
            break;
        case '4':
            studentManagement.listStudents();
            showMenu();
            break;
        case '5':
            rl.close();
            break;
        default:
            console.log('Invalid option, please try again.');
            showMenu();
            break;
    }
};

showMenu();
