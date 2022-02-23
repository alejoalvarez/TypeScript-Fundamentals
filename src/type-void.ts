// explicit type
function showInfo(user: any): any{
    console.log(">>UserInfo:", user.id, user.username, user.firstName);
    //return 'Anything'; // return void
}

//call function showInfo
showInfo({id: 1, username: 'Alejo', firstName: 'Alvarez'});

// inferred type
function showFormattedInfo(user: any){
    console.log('>>User Info:',`
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstName}
    `);
};

// call function showFormattedInfo
showFormattedInfo({id: 1, username: 'Alejo', firstName: 'Alvarez'});

// void type like a data type in variable
let unusable = null; // null is a subtype of void
unusable = undefined // undefined is a subtype of void