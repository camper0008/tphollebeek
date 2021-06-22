import skillFilled from '../assets/images/icons/skill-fill-white.svg'
import skillEmpty from '../assets/images/icons/skill-none-white.svg'

function Rating(props) {
  return (
    <div>
        {Array.apply(null, { length: props.length }).map((e, i) => (
            <img src={skillFilled} alt="En fyldt cirkel"></img>
        ))}
        {Array.apply(null, { length: (5 - props.length) }).map((e, i) => (
            <img src={skillEmpty} alt="En tom cirkel."></img>
        ))}
    </div>
  );
}

export default Rating;
