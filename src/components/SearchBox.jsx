import styled from "styled-components";
import SearchIcon from '../assets/icon-search.svg';

const SearchBox = function (props) {
    return (
        <SearchContainer onSubmit={props.fetchHandler}>
            <div className="flex-helper">
                <img className="search-icon" src={SearchIcon} alt="Search icon" />
                <input spellCheck='false' onChange={props.inputHandler} className="search-input" type='text' placeholder="Search GitHub username" />
            </div>
            <div className="flex-helper">
                <span className="error-msg">{props.error ? 'Not found' : ''}</span>
                <button onClick={props.fetchHandler} className="search-btn">Search</button>
            </div>
        </SearchContainer>
    )
}

export default SearchBox;

const SearchContainer = styled.form`
    width: 100%;
    height: 4.3125rem; 
    background: ${props => props.theme.containersBackground};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 0.93rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 0.625rem;
    margin-bottom: 0.5rem;
    transition: all 0.3s;

    //Below 550px //
            @media (max-width: 34.375em) {
                height: 3.75rem;
                margin-top: 0.5rem;
                padding-left: 1rem;
            }

    .flex-helper {
        display: flex;
        align-items: center;
    }

    .search-icon {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: 1.5rem;

        //Below 550px //
            @media (max-width: 34.375em) {
                height: 1.1rem;
                width: 1.1rem;
                margin-right: 0.5rem;
            }
    }

    .search-input {
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.56rem;
        color: ${props => props.theme.commonTextAndIcons};
        letter-spacing: 1.5px;
        width: 15rem;
        border: none;
        background: ${props => props.theme.containersBackground};
        caret-color: #0079FF;
        transition: all 0.3s;

        //Below 550px //
            @media (max-width: 34.375em) {
                width: 100%;
                font-size: 0.8rem;
                letter-spacing: 1px;
            }

        &:focus {
            outline: none;
        }

        &:focus::placeholder {
            color: transparent;
        }
        
        &::placeholder {
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 1.56rem;
            color: ${props => props.theme.commonTextAndIcons};
            transition: all 0.3s;

            //Below 550px //
            @media (max-width: 34.375em) {
                font-size: 0.7rem;
                letter-spacing: 1px;
            }
        }
    }

    .error-msg {
        font-weight: 700;
        font-size: 0.93rem;
        line-height: 1.37rem;
        color: #F74646;
        white-space: nowrap;

        //Below 550px //
            @media (max-width: 34.375em) {
                font-size: 0.8rem;
                letter-spacing: 1px;
            }
    }

    .search-btn {
        background: #60ABFF;
        border-radius: 0.625rem;
        height: 3.125rem;
        width: 6.625rem;
        border: none;
        font-size: 1rem;
        font-weight: 700;
        color: #FFF;
        cursor: pointer;
        margin-left: 1.5rem;
        transition: 0.1s;

        &:hover {
            background: #6068ff;
        }

        &:focus {
            outline: none;
            border: 1px #6068ff;
        }

        &:active {
            background: #60ABFF;
        }

        //Below 550px //
            @media (max-width: 34.375em) {
                font-size: 0.9rem;
                height: 3rem;
                width: 5.25rem;
            }
    }
`
