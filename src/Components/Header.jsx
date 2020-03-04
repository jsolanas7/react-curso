import React from 'react';

function Header() {
    const number = 5;
    let message;
    if(number <= 5){
        message = 'Menor o igual que 5'
    }else{
        message = 'Mayor que 5'
    }
    return(
        <h1>Header {message}</h1>
    );
}



export default Header;