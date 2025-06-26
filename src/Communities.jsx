import { IconCloud } from "./components/magicui/icon-cloud";
import "./Communities.css";

function Communities() {

  return (
    <div id="communities">
      <h1>Join one of our communities, or create your own with your unique brand!</h1>
      <div id="communities-bottom">
        <ul id="communities-list">
          <li>AfterLife</li>
          <li>SmartFrends</li>
          <li>CafeLingua</li>
          <li>Aperol Network</li>
          <li>Squash Sports Network</li>
          <li>Padel Sports Network</li>
        </ul>
        <div id="icons" className="relative overflow-hidden">
          <IconCloud images={["afterlife-logo.webp", "smartfrends-logo.png", "stafftribes-logo.png", "cafelingua-logo.png", "afterlife-logo.webp", "smartfrends-logo.png", "stafftribes-logo.png", "cafelingua-logo.png", "afterlife-logo.webp", "smartfrends-logo.png", "stafftribes-logo.png", "cafelingua-logo.png", "stafftribes-logo.png", "stafftribes-logo.png", "stafftribes-logo.png", "stafftribes-logo.png", "stafftribes-logo.png"]} />
        </div>
      </div>
    </div>
  )
}

export default Communities;
