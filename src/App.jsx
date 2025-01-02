
import './App.css'
import ProfileCard from './ProfileCard'

export default function App() {
  const aiAssistant = [
    {
      name:'Alexa'
    },
    {
      name:'Siri'
    }
  ];
  return (
  <ProfileCard aiAssistant={aiAssistant}/>
  )
}
