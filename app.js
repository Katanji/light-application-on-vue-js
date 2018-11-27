const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image});
const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+7 123 321 12 21', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Svetlana', 2018, '+7 000 111 22 33', 'images/mondeo.jpg'),
    car('Porshe', 'Panamera', 'Dmitry', 2015, '+7 111 222 33 44', 'images/panamera.png'),
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index];
            this.selectedCarIndex = index;
        },
        newOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            );
        },
        cancelOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
            );
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone';
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            });
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString();
        }
    }
});