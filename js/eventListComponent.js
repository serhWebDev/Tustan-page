var EVENTS = [
    {
        id:1,
        image:'./img/pic.jpg',
        eventName:'Похід воїнів бургунди',
        day:'6.08',
        time:'17:00',
        topic:'Воїни',
        location:'Сцена 1'
    },{
        id:2,
        image:'./img/pic.jpg',
        eventName:'Дитячий штурм фортеці',
        day:'6.08',
        time:'14:00',
        topic:'Головна сцена',
        location:'Сцена 2'
    },{
        id:3,
        image:'./img/pic.jpg',
        eventName:'Театр "Любарт"',
        day:'6.08',
        time:'17:00',
        topic:'Воїни',
        location:'Сцена 3'
    },{
        id:4,
        image:'./img/pic.jpg',
        eventName:'Похід на Київ',
        day:'6.08',
        time:'14:00',
        topic:'Головна сцена',
        location:'Сцена 2'
    },{
        id:5,
        image:'./img/pic.jpg',
        eventName:'Вистава "Казан"',
        day:'6.08',
        time:'17:00',
        topic:'Воїни',
        location:'Сцена 5'
    },{
        id:6,
        image:'./img/pic.jpg',
        eventName:'Похід лицарів тундри',
        day:'6.08',
        time:'17:00',
        topic:'Воїни',
        location:'Сцена 1'
    },{
        id:7,
        image:'./img/pic.jpg',
        eventName:'Побудова села',
        day:'6.08',
        time:'14:00',
        topic:'Воїни',
        location:'Сцена 2'
    },{
        id:8,
        image:"./img/pic.jpg",
        eventName:'Запікання хлібу',
        day:'6.08',
        time:'17:00',
        topic:'Головна сцена',
        location:'Сцена 1'
    }
];

var Event = React.createClass({
    render: function () {
        return (
            <div className="event center">
                <img className="desc eventImage" src={this.props.image} alt={this.props.image} />
                <h6 className="desc eventTitle" ><b>{this.props.eventName}</b></h6>
                <p className="desc eventData" >Дата: {this.props.day}</p>
                <p className="desc eventTime" >Час: {this.props.time}</p>
                <p className="desc eventTopic" >Тема: {this.props.topic}</p>
                <p className="desc eventLocation" >Локація: {this.props.location}</p>
            </div>
        );
    }
});

var EventList = React.createClass({
    getInitialState: function () {
        return {
            displayEvents:EVENTS
        };
    },
    /*Поиск*/
    handleSearch: function (event) {
        /*console.log(event.target.value); /*Вывод печати в строке поиск*/
        /*Переменная в которой хранится то что мы будем искать в именах наших контактах*/
        /*Все значения инпута и привели в нижний регистр, для того что бы наш поиск не зависил от регистра*/
        var searchQuery = event.target.value.toLowerCase();
        /*фильтр событий*/
        /*Создаем новый масив контактов которые отображаются*/
        var displayEvents = EVENTS.filter(function(el) {
            /*Функция возвращает новый масив только тех элементов, для которых функция вернула TRUE*/
            var searchValue = el.eventName.toLowerCase();
                return searchValue.indexOf(searchQuery) !==-1;
        });
        this.setState({
            displayEvents:displayEvents
        });
    },
    render: function () {
        return (
            <div>
                <input  placeholder={"Пошук"} type="text" className="validate" onChange={this.handleSearch} />
                <div id="eventBlock">
                    {
                        this.state.displayEvents.map(function (el) {

                            return <Event key={el.id}
                                          image={el.image}
                                          eventName={el.eventName}
                                          day={el.day}
                                          time={el.time}
                                          topic={el.topic}
                                          location={el.location}
                            />;
                        })
                    }
                </div>
            </div>
        );
    }
});
ReactDOM.render(
        <EventList />,
    document.getElementById('mainContent')
);