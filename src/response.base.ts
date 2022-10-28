import { Res, HttpStatus, Response } from '@nestjs/common';
export class AppResponse {

    static ok(@Res() res, values: any, message: String = ""): Response {
        return res.status(HttpStatus.OK).json({
            "status": "Success",
            "message": message,
            "data": values
        })
    }

    static created(@Res() res, values: any, message: String = ""): Response {
        return res.status(HttpStatus.CREATED).json({
            "status": "Success",
            "message": message,
            "data": values
        })
    }

    static badRequest(@Res() res, values: any, message: String = ""): Response {
        return res.status(HttpStatus.BAD_REQUEST).json({
            "status": "Bad Request",
            "message": message,
            "data": {}
        })
    }

    static notFound(@Res() res, values: any, message: String = ""): Response {
        return res.status(HttpStatus.NOT_FOUND).json({
            "status": "Not Found",
            "message": 'Data Not Found!',
            "data": {}
        })
    }
}