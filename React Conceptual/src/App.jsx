import { Suspense } from 'react';
import Button from './components/Button';
import Players from './components/Players';
import Spinner from './components/Spinner';
import Users from './components/Users';
import Friends from './components/Friends.Jsx';
import Countries from './components/Countries';
import Country from './components/Country';
import NavBar from './components/NavBar';
import PricingOption from './components/PricingOption';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

//Method 2
const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())

const prisingPromise = fetch('/pricingAll.json')
const App = () => {
  const friends = fetchFriends()
  return (
    <div>
      {/* <Button/>
      <Players />
      <Suspense fallback={<Spinner />}>
      <Users props={fetchUsers}/>
      </Suspense>
      <Suspense fallback={<Spinner />}>
      <Friends props={friends}/>
      </Suspense> */}
      {/* <Suspense fallback={<Spinner />}>
        <Country country={countriesPromise}/>
      </Suspense> */}
      <NavBar />
      <Suspense fallback={<Spinner />}>
      <PricingOption props={prisingPromise}/>
      </Suspense>
    </div>
  );
};

export default App;