// app.js
const app = new Vue({
    el: '#app',
    data: {
        questions: [
            {
                text: 'Which programming language is commonly used for building web applications?',
                name: 'language',
                options: ['Java', 'Python', 'JavaScript', 'C++'],
                selectedOption: null
            },
            {
                text: 'Which data structure would you use to implement a Last-In-First-Out (LIFO) behavior?',
                name: 'data-structure',
                options: ['Queue', 'Linked List', 'Stack', 'Hash Table'],
                selectedOption: null
            },
            {
                text: 'What is the purpose of version control systems in programming?',
                name: 'version-control-purpose',
                options: ['To optimize database performance', 'To manage and track changes in code', 'To test software applications', 'To write complex algorithms'],
                selectedOption: null
            },
            {
                text: 'Which software development methodology emphasizes incremental development and frequent customer feedback?',
                name: 'methodology',
                options: ['Agile', 'Waterfall', 'Scrum', 'RAD (Rapid Application Development)'],
                selectedOption: null
            },
            {
                text: 'What is the correct syntax to declare a variable in Python?',
                name: 'python-syntax',
                options: ['var x = 10', 'int x = 10', 'x = 10', 'let x = 10'],
                selectedOption: null
            }
        ],
        currentQuestionIndex: 0,
        answers: [],
        suggestCareerOptions: [
            {
                selectedOptions : ['JavaScript', 'Stack', 'To manage and track changes in code', 'Agile', 'x = 10'],
                career: 'Full-Stack Web Developer, DevOps Engineer, Agile Software Developer'
            },
            {
                selectedOptions : ['Java', 'Hash Table', 'To manage and track changes in code', 'Agile', 'x = 10'],
                career: 'Java Developer, Data Engineer, Agile Software Developer'
            },
            {
                selectedOptions : ['C++', 'Linked List', 'To manage and track changes in code', 'Scrum', 'int x = 10'],
                career: 'C++ Developer, Software Engineer (General), Scrum Master'
            }
        ],
        // allItemsMatch: null,
        printedSuggestion: ''
    },
    methods: {
        nextQuestion() {
            // Check if the user has selected an option before moving to the next question
            if (this.questions[this.currentQuestionIndex].selectedOption !== null) {
                this.currentQuestionIndex++;
            } else {
                alert('Please select an option before proceeding.');
            }

            // checks to see if the last question has been answered
            if(this.currentQuestionIndex >= this.questions.length) {
                this.answers = this.questions.map(question => question.selectedOption);

                this.suggestCareerOptions.some((arr, index) =>{
                    if (this.answerMatch(arr, this.answers)) {
                        this.printedSuggestion = this.suggestCareerOptions[index].career;
                    } else{
                        this.printedSuggestion = 'Machine Learning Engineer';
                    }
                    
                });
                console.log(this.printedSuggestion);
            }
        },
        selectOption(index, item) {
            this.questions[index].selectOption = item;
        },
        answerMatch(arr1, arr2) {
            if (arr1.selectedOptions.length !== arr2.length) {
                return false;
            }
            
            for (let i = 0; i < arr1.selectedOptions.length; i++) {
                if (arr1.selectedOptions[i] !== arr2[i]) {
                    return false;
                }
            }
            
            return true;
        }
    }
});


