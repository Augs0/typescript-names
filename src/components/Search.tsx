import { boysNames } from '../data/boys-name.json';
import { girlsNames } from '../data/girls-names.json';

interface Props {
  setUsersName(arg: string): void;
  usersName: string;
  setMessage(arg: string): void;
}

const Search: React.FC<Props> = ({ usersName, setUsersName, setMessage }) => {
  const checkNameRanking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (let i = 0; i < boysNames.length; i++) {
      if (boysNames[i].name === usersName) {
        let pos = boysNames[i].position;
        setMessage(
          `${usersName} was in the top ten boys names in 1999, at position ${pos}`
        );
        return;
      } else {
        setMessage(`${usersName} was not in the top ten in 1999!`);
      }
    }

    for (let i = 0; i < girlsNames.length; i++) {
      if (girlsNames[i].name === usersName) {
        let pos = girlsNames[i].position;
        setMessage(
          `${usersName} was in the top ten girls names in 1999, at position ${pos}`
        );
        return;
      } else {
        setMessage(`${usersName} was not in the top ten in 1999!`);
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let grabName = e.target.value;
    setUsersName(grabName);
  };

  return (
    <form onSubmit={checkNameRanking}>
      <label htmlFor='usersName'>Enter your name</label>
      <input
        onChange={handleInput}
        type='text'
        name='usersName'
        id='usersName'
      />
      <button className='btn' type='submit'>
        Search
      </button>
    </form>
  );
};

export default Search;
