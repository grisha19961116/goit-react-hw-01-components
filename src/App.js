import user from './user.json';
import statisticData from './statistical-data.json';
import friendsData from './friends.json';
import transactionsData from './transactions';

import Profile from './components/Profile/Profile.js';
import Statistics from './components/Statistics/Statistics.js';
import FriendList from './components/FriendList/FriendList.js';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.js';

export default function App() {
  return (
    <>
      <Profile props={user} />
      <Statistics title="Upload stats" props={statisticData} />
      <Statistics props={statisticData} />
      <FriendList props={friendsData} />
      <TransactionHistory props={transactionsData} />;
    </>
  );
}
