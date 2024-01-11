import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import './errorpage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">

    <div className="error-container">
      <h1>Oops! Out of Bounds!</h1>
      <p>
        It looks like you tried to make a pass to a part of our court that doesn't exist! Maybe it's a secret play we haven't invented yet. While we appreciate your creativity in exploring new routes, our website isn't quite as adventurous.
      </p>
      <p>
        Let's dribble back to the <Link to="./">Website</Link> and find a play that scores. If you're feeling lost, just remember: in basketball, as on our website, teamwork makes the dream work. Pass the ball back to us, and we'll help you find the way!
      </p>
    </div>

      {/* Adding the GIF using an iframe */}
      <div className="error-gif">
        <iframe 
          src="https://giphy.com/embed/iO6CThmjgJIDpEBbM7" 
          width="480" 
          height="480" 
          title="test"
          >
        </iframe>
      </div>
    </div>
  );
}
