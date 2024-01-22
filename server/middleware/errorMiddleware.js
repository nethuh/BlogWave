const errorMiddleware = (err, req, res, next) => {
    const defaultError = {
        statusCode: 500, // Default to Internal Server Error
        success: "failed",
        message: err,
    };

    // Log the error for debugging
    console.error(err);

    if (err?.name === "ValidationError") {
        defaultError.statusCode = 400; // Bad Request

        defaultError.message = Object.values(err.errors)
            .map((el) => el.message)
            .join(",");
    }
}
