import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type , onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-cstgoldyellow font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-cstgoldepale  focus:bg-cstgoldyellow focus:outline-none focus:ring focus:ring-cstgoldyellow focus:ring-offset-2 disabled:cursor-not-allowed font-sans';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round : base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block text-sm rounded-full border-2 border- cstlightgold font-semibold uppercase tracking-wide text- cstlightgold transition-colors duration-300 hover:bg-cstdefaultred hover:text-cstlightgold focus:bg-cstdefaultred focus:text-cstlightgold focus:outline-none focus:ring focus:ring- cstlightgold focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

if(onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );


  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
