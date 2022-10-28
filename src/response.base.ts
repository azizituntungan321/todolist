import { Res, HttpStatus, Response } from '@nestjs/common';
export class AppResponse {

    static ok(@Res() res, values: any, message: String = ""): Response {
        return res.status(HttpStatus.OK).json({
            "status": "Success",
            "message": "Success",
            "data": values
        })
    }

    static created(@Res() res, values: any, message: String = ""): Response {
        return res.status(HttpStatus.CREATED).json({
            "status": "Success",
            "message": "Success",
            "data": values
        })
    }

    static badRequest(@Res() res, values: any, message: String = ""): Response {
        return res.status(HttpStatus.BAD_REQUEST).json({
            "status": HttpStatus.BAD_REQUEST,
            "message": message,
        })
    }

    static notFound(@Res() res, values: any, message: String = ""): Response {
        return res.status(HttpStatus.NOT_FOUND).json({
            "status": HttpStatus.NOT_FOUND,
            "message": 'Data Not Found!',
        })
    }
}