import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.singlePage{
  margin: 4rem auto;
}
.scroll-box-right {
        height: 150vh;
        position: relative;
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
          width: 5px;
          box-shadow: inset 0 0 7px #11010125;
          border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
          background: ${({ theme }) => theme.colors.primary90};
          border-radius: 10px;

          &:hover {
            background: ${({ theme }) => theme.colors.primary};
          }
        }
      }

.singlePage{
  .hmUPgY .singlePage .left img{
    border: 2px solid;;
  }
  h2{
    color: ${({ theme }) => theme.colors.primary};
  }
  .icon-box {
    margin: 25px 0 50px;
    
    .box {        
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 150px;
      height: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 15px 0px;
      border-radius: 10px;
       img {
          margin: 1rem;
          /* width: 100%; */
          height: 55px;
          /* border: 2px solid; */
        }
        h5 {
          font-size: 15px;
        }
      }
    }
  }
  
.questions {
    margin-top: 1.5rem;
        .question {
      font-size: ${({ theme }) => theme.fonts.heading2};
      font-weight: 600;
    }
    .include {
      font-size: ${({ theme }) => theme.fonts.heading4};
      font-weight: 600;
      line-height: 1.5;
    }
    p,
    li {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 5px;
      &::marker {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
  /* --------------- Packages content -------------  */
.pkg-cnt{
  padding-bottom:20px; 
  h3{
  margin-top: 15px;
  } 
  li {
      margin-top: 5px;       
      font-weight: 500;
    &::marker {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }
}
  
  /* ---------------End Packages content -------------  */
 
`;
export default GlobalStyle;
