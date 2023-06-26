import { Checkbox } from 'antd';
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const App = () => <Checkbox onChange={onChange}>Показать снятых исполнителей</Checkbox>;
export default App;