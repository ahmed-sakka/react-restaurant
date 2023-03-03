import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          <div className={`${classes.icon} ${classes.baseline}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              width='25px'
              height='25px'
            >
              <path d='M4.222 3.808l6.717 6.717-2.828 2.829-3.89-3.89a4 4 0 0 1 0-5.656zm10.046 8.338l-.854.854 7.071 7.071-1.414 1.414L12 14.415l-7.071 7.07-1.414-1.414 9.339-9.339c-.588-1.457.02-3.555 1.62-5.157 1.953-1.952 4.644-2.427 6.011-1.06s.892 4.058-1.06 6.01c-1.602 1.602-3.7 2.21-5.157 1.621z' />
            </svg>
          </div>
          React Restaurant
        </h1>
        <HeaderCartButton onClick={props.onToggleShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Meals' />
      </div>
    </>
  );
};

export default Header;
