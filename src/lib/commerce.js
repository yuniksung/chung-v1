import Commerce from '@chec/commerce.js';



//  This Works Fine!!!
// export const commerce = new Commerce('pk_267824b4cf40d8fad4a82641f7f8fc813925ef7f8a097', true);


// But this does doesn't! 
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
