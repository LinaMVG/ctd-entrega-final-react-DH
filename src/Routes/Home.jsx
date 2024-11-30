import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
 const {state } = useContextGlobal();
 console.log("muestra el valor de state en home ::", state);
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'> 
        {state.loading ? (
          <p>Loading dentists...</p>
        ) : state.dentists && state.dentists.length > 0 ? (
          state.dentists.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p>No dentists found.</p>
        )}
      </div>
    </main>
  )
}

export default Home