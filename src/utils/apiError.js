class ApiError extends Error {
    constructor(
        statusCode,
        messsage = "Something went wrong",
        errors = [],
        statck = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = messsage;
        this.success = false;
        this.errors = errors;
    }

    // if (statck) {
    //     this.stack = statck
    // } else{
    //     Error.captureStackTrace(this, this.constructor);
    // }
}

export default ApiError;
