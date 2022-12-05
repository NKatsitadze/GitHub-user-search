import styled from "styled-components";
import LocIcon from '../assets/icon-location.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import WebsiteIcon from '../assets/icon-website.svg';
import CompanyIcon from '../assets/icon-company.svg';
import React from "react";

const InfoBox = function ({ fetchedData, error, isLoading }) {
    const createTime = new Date(fetchedData.created_at);
    const day = createTime.getUTCDate();
    const year = createTime.getUTCFullYear();
    const month = createTime.toLocaleString('default', { month: 'long' });


    const content = <>
        <div className="grid-box-1">
            <img className="user-pic" src={fetchedData.avatar_url} alt="User profile picture" />
        </div>

        <div className="grid-box-2">
            <div className="name-date-box">
                <span className="username">{fetchedData.name ?? ''}</span>
                <span className="GHname">@{fetchedData.login}</span>
            </div>
            <span className="join-date">Joined {day} {month} {year}</span>
        </div>

        <div className="grid-box-3">
            <p className="bio">{fetchedData.bio ?? 'This profile has no bio'}</p>
        </div>

        <div className="grid-box-4">
            <div className="statistics">
                <span className="statistics-span-texts">Repos</span>
                <span className="statistics-span-numbers">{fetchedData.public_repos}</span>
            </div>
            <div className="statistics">
                <span className="statistics-span-texts">Followers</span>
                <span className="statistics-span-numbers">{fetchedData.followers}</span>
            </div>
            <div className="statistics">
                <span className="statistics-span-texts">Following</span>
                <span className="statistics-span-numbers">{fetchedData.following}</span>
            </div>
        </div>

        <div className="grid-box-5">
            <div className="contact-info-div">
                <img className="contact-icon fix" src={LocIcon} alt="Location icon" />
                <span className="contact-text extra-space">{fetchedData.location ?? <span className="op">Not available</span>}</span>
            </div>
            <div className="contact-info-div">
                <img className="contact-icon" src={TwitterIcon} alt="Twitter icon" />
                <a className="contact-text" target={fetchedData.twitter_username === null ? '' : '_blank'} href={fetchedData.twitter_username === null ? '#' : `https://twitter.com/${fetchedData.twitter_username}`}><span>{fetchedData.twitter_username ?? <span className="op">Not available</span>}</span></a>
            </div>
            <div className="contact-info-div">
                <img className="contact-icon" src={WebsiteIcon} alt="Website icon" />
                <a className="contact-text" target="_blank" href={fetchedData.blog === '' ? '#' : `${fetchedData.blog}`}><span>{fetchedData.blog === '' ? <span className="op">Not available</span> : fetchedData.blog}</span></a>
            </div>
            <div className="contact-info-div">
                <img className="contact-icon" src={CompanyIcon} alt="Company icon" />
                <span className="contact-text">{fetchedData.company ?? <span className="op">Not available</span>}</span>
            </div>
        </div>
    </>

    const LoadingContent = <InfoContainer>
        <ErrLoadingBox>
            <Loader />
        </ErrLoadingBox>
    </InfoContainer>

    const ErrorContent = <ErrLoadingBox>
        {error}
    </ErrLoadingBox>

    const handledContent = <InfoContainer>
        {error ? ErrorContent : content}
    </InfoContainer>

    return (
        <React.Fragment>
            {isLoading ? LoadingContent : handledContent}
        </React.Fragment>
    )
}

export default InfoBox;

const InfoContainer = styled.div`
    width: 100%;
    height: 27.75rem;
    background: ${props => props.theme.containersBackground};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 0.93rem;
    display: grid;
    padding: 3rem;
    grid-template-columns: 10rem 1fr; 
    transition: all 0.3s;
    position: relative;
    overflow: hidden;

    //Below 768px//
    @media (max-width: 48em) {
        padding: 2.5rem;
        height: 30rem;
    };

    //Below 550px //
    @media (max-width: 34.375em) {
        grid-template-columns: 5rem 1fr;
        padding: 2rem 1.5rem 3rem 1.5rem;
        height: 32.31rem;
        }
    }

    .grid-box-1 {
        grid-row: 1/span 4;

        //Below 768px//
        @media (max-width: 48em) {
            grid-row: 1/span 1;
        }

        .user-pic {
            width: 7.31rem;
            height: 7.31rem;
            border-radius: 50%;

            //Below 550px //
            @media (max-width: 34.375em) {
                height: 4.375rem;
                width: 4.375rem;
                margin-top: 0.8rem;
                }
        }
    }

    .grid-box-2 {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 48em) {
            flex-direction: column;
            justify-content: center;
            align-items: start;
        }

        .name-date-box {
            display: flex;
            flex-direction: column;
        }

        .username {
          font-weight 700;
          font-size: 1.62rem;
          line-height: 2.4rem; 
          color: ${props => props.theme.username}; 
          transition: all 0.3s;

          //Below 550px //
            @media (max-width: 34.375em) {
                    font-size: 1rem;
                    margin-bottom: -0.5rem;
            }
        }

        .join-date { 
            color: ${props => props.theme.moon};
            font-weight: 400;
            font-size: 0.9rem;
            line-height: 1.37rem;
            transition: all 0.3s;

            //Below 550px //
            @media (max-width: 34.375em) {
                    font-size: 0.8rem;
            }
        }

        .GHname {
            color: #0079FF;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.37rem;
            transition: all 0.3s;

            //Below 550px //
            @media (max-width: 34.375em) {
                    font-size: 0.8rem;
            }
        }
    }

    .grid-box-3 {
        @media (max-width: 48em) {
            grid-column: 1/ span 2;
        }

        .bio {
            color: ${props => props.theme.moon};
            font-size: 0.9rem;
            font-weight: 400;
            line-height: 1.37rem;  
            transition: all 0.3s;

            //Below 550px //
            @media (max-width: 34.375em) {
                    font-size: 0.8rem;
            }
        }
    }

    .grid-box-4 {
        height: 5.3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background: ${props => props.theme.primaryBackground};
        border-radius: 0.6rem;
        padding: 1rem 2rem;
        transition: all 0.3s;

        @media (max-width: 48em) {
            grid-column: 1/ span 2;
        }

        .statistics {
            display: flex;
            flex-direction: column;
        }

        .statistics-span-texts {
            color: ${props => props.theme.moon};
            font-weight: 400;
            font-size: 0.8rem;
            line-height: 1.2rem;
            transition: all 0.3s;

            //Below 550px //
            @media (max-width: 34.375em) {
                    font-size: 0.69rem;
            }
        }

        .statistics-span-numbers {
            color: ${props => props.theme.boldText};
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 2rem;
            transition: all 0.3s;

            //Below 550px //
            @media (max-width: 34.375em) {
                    font-size: 1rem;
            }
        }
    }

    .grid-box-5 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;

        //Below 550px //
            @media (max-width: 34.375em) {
                grid-template-columns: 1fr;
                row-gap: 1rem;
            }

        .extra-space {
            margin-left: 0.35rem;
        }
            
        .contact-info-div {
            display: flex;
            gap: 1rem;
            max-width: 11rem;

            @media(max-width: 768px) {
                max-width: 15rem;
            }
        }

        .contact-icon {
            width: 1.2rem;
            height: 1.2rem;
        }

        .fix {
            height: 1.25rem;
            width: 0.85rem;
        }

        .contact-text {
           color: ${props => props.theme.commonTextAndIcons};
           font-weight: 400;
           font-size: 1rem; 
           white-space: nowrap;
           transition: all 0.3s;
           text-decoration: none;
           cursor: pointer;

           //Below 550px //
            @media (max-width: 34.375em) {
                    font-size: 0.8rem;
            }
        }
    }

    .op {
        opacity: 0.7;
    }
`

const ErrLoadingBox = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F74646;
    font-size: 1.5rem;
    font-weight: 700;
`

const Loader = styled.span`
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    border: 1rem dashed #0079FF;
    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    `