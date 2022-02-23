function handlerError(code: number, message: string): never{
    // Process your code here
    throw new Error(`${message}. Code: ${code}` ); // No print anything
}

// call function 
try {
    handlerError(404, 'Not found')
} catch (error) {
    
}
