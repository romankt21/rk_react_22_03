import './App.css'
import Actor from "./components/Actor";
import Users from "./components/Users";
const actors = [
    {id: 1 , name: 'Tom', img: 'https://anews.com/upload/post/2021/02/26/136485171/8ca56cdeab57472dbe3f74d423b6dd69.jpg'},
    {id: 2, name: 'Jerry', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJP-TpioYMt5rVGf7m5gqWwIeOpkLlLc3Aw&usqp=CAU'},
    {id: 3, name: 'Spike', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUi3Mi8upbN25LfgsgsXGn7F4n_xEYq2CZEQ&usqp=CAU'}
]
function App() {
  return (
   <div>
       {actors.map(actor=><Actor key={actor.id} name={actor.name} img={actor.img}/>)}
       <Users/>
   </div>
  );
}

export default App;
