import MyCards from "./MyCards";
import App from '../../assets/App.png'
import Web from '../../assets/Web.png'
import Graphics from '../../assets/Graphics.png'

const GraphicsSkills=[
  App,
  Web,
  Graphics,
  Graphics,
  Graphics,
  Graphics,
]
const WebsiteSkills=[
  App,
  Web,
  Graphics,
  Graphics,
  Graphics,
  Graphics,
]
const ApplicationSkills=[
  App,
  Web,
  Graphics,
  Graphics,
  Graphics,
  Graphics,
]
const Cards=[
    <MyCards title={'Graphic Design'} image={Graphics} pics={GraphicsSkills.map((pic)=><div className="w-12 m-2"><img src={pic} alt='' ></img></div>)} body={'Building Original and great looking modern graphic designs'}/>,
    <MyCards title={'Web Development'} image={Web} pics={WebsiteSkills.map((pic)=><div className="w-12 m-2"><img src={pic} alt='' ></img></div>)} body={'Building Original and great looking modern graphic designs'}/>,
    <MyCards title={'App Development'} image={App} pics={ApplicationSkills.map((pic)=><div className="w-12 m-2"><img src={pic} alt='' ></img></div>)} body={'Building Original and great looking modern graphic designs'}/>,
]
export default Cards;