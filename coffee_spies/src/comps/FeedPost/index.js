import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
min-width: 320px;
max-width: 320px;
margin-bottom: 20px;
`;

const UserPost = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 14px;
`;
const Post = styled.div`
display: flex;
position: relative;
border-radius: 15px;
color: white;
min-width: 320px;
min-height: 350px;
max-width: 320px;
max-height: 350px;
background-image: url(${props=>props.bgimage? props.bgimage : "coffee.jpg"});
background-repeat: no-repeat;
background-attachment: fixed;
background-size: contain;
`;

const Gradient = styled.div`
background-image: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 100%);
min-width: 320px;
min-height: 350px;
max-width: 320px;
max-height: 350px;
border-radius: 15px;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
position: absolute;
bottom: 0px;
margin: 20px;
div {
    display: flex;
    align-items: center;
    div {
        margin-right: 10px;
    }
}
`;

const Social = styled.div`
display: flex;
`;

const FeedPost = ({title, desc, like, comment}) => {
return <Container>
    <UserPost>
        <div>
            Victoria
        </div>
        <div>
            16:03
        </div>
        
    </UserPost>
    <Post>
        <Gradient>
        </Gradient>
        <Content>
            <div><h1>{title}</h1></div>
            <div><h2>{desc}</h2></div>
            <div>
                <div>
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99085 14.8117L16.6348 8.30032C18.2672 6.70041 18.5081 4.06831 16.9632 2.38693C16.5762 1.96455 16.1055 1.62387 15.5798 1.38568C15.054 1.14748 14.4843 1.01677 13.9053 1.00151C13.3263 0.986251 12.7502 1.08677 12.2121 1.29692C11.6741 1.50708 11.1854 1.82247 10.7758 2.22386L9.52704 3.4477L8.44887 2.39103C6.81641 0.791119 4.13075 0.555077 2.41515 2.06914C1.98418 2.44838 1.63657 2.90971 1.39353 3.42497C1.15048 3.94024 1.01711 4.49863 1.00154 5.06607C0.985971 5.63352 1.08853 6.19813 1.30297 6.72545C1.5174 7.25277 1.83921 7.73174 2.24876 8.13314L9.06323 14.8117C9.18624 14.9323 9.35308 15 9.52704 15C9.701 15 9.86784 14.9323 9.99085 14.8117Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2>&nbsp;{like}</h2>
                </div>
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.54909 13.828C2.61727 12.2572 2.29093 10.4002 2.63137 8.60578C2.97181 6.81137 3.9556 5.20295 5.398 4.08256C6.84041 2.96217 8.64221 2.40687 10.4651 2.52094C12.2879 2.63501 14.0064 3.4106 15.2979 4.70207C16.5894 5.99354 17.365 7.71205 17.4791 9.53491C17.5931 11.3578 17.0379 13.1596 15.9175 14.602C14.7971 16.0444 13.1887 17.0282 11.3943 17.3686C9.59985 17.7091 7.74288 17.3828 6.17204 16.4509L3.5817 17.191C3.47453 17.2216 3.36112 17.223 3.25322 17.195C3.14533 17.1671 3.04687 17.1108 2.96806 17.0319C2.88924 16.9531 2.83294 16.8547 2.80498 16.7468C2.77702 16.6389 2.77843 16.5255 2.80905 16.4183L3.54909 13.828Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5 8.75H12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5 11.25H12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2>&nbsp;{comment}</h2>
                </div>
            </div>
        </Content>
    </Post>
</Container>
}

FeedPost.defaultProps = {
    bgimage : null,
    title: null,
    desc: null,
    like: null,
    comment: null
}

export default FeedPost;