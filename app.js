// app.js
const app = new Vue({
    el: '#app',
    data: {
        questions: [
            {
                text: 'Question 1: What is your favorite color?',
                name: 'color',
                options: ['Red', 'Blue', 'Green'],
                selectedOption: null
            },
            {
                text: 'Question 2: Which programming language do you like?',
                name: 'language',
                options: ['JavaScript', 'Python', 'Java'],
                selectedOption: null
            },
            {
                text: 'Question 3: What is your favorite animal?',
                name: 'animal',
                options: ['Dog', 'Cat', 'Bird'],
                selectedOption: null
            }
        ],
        currentQuestionIndex: 0
    },
    methods: {
        nextQuestion() {
            // Check if the user has selected an option before moving to the next question
            if (this.questions[this.currentQuestionIndex].selectedOption !== null) {
                this.currentQuestionIndex++;
            } else {
                alert('Please select an option before proceeding.');
            }
        },
        selectOption(index, item) {
            this.questions[index].selectOption = item;
        },
        testing(index) {
            console.log(this.questions[index].selectOption);
        }
    }
});
