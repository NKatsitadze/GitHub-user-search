import styled from 'styled-components';
import Moon from '../assets/icon-moon.svg';
import Sun from '../assets/icon-sun.svg';


const Header = function (props) {
    return (
        <HeaderBox>
            <span className='name'>devfinder</span>
            <div onClick={props.themeToggler} className='theme-box'>
                <span className='theme-name'>{props.darkTheme ? 'LIGHT' : 'DARK'}</span>
                <img className='theme-icon' src={props.darkTheme ? Sun : Moon} alt="Theme icon" />
            </div>
        </HeaderBox>
    )
}

export default Header;

const HeaderBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.43rem;
        color: ${props => props.theme.devfinder};
        transition: all 0.3s;
    }

    .theme-box {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .theme-name {
        font-weight: 700;
        font-size: 0.8rem;
        line-height: 1.18rem;
        letter-spacing: 0.15rem;
        color: ${props => props.theme.moon};
    }

    .theme-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-left: 1rem;
    }
`