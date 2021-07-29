import skillFilled from '../assets/images/icons/skill-fill-white.svg'
import skillEmpty from '../assets/images/icons/skill-none-white.svg'

function Rating(props) {
  return (
    <div className="rating-container" aria-hidden="true">
        {Array.apply(null, { length: props.length }).map((e, i) => (
            <img src={skillFilled} alt=""></img>
        ))}
        {Array.apply(null, { length: (5 - props.length) }).map((e, i) => (
            <img src={skillEmpty} alt=""></img>
        ))}
    </div>
  );
}

export default Rating;
