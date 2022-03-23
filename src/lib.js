const errorResponse = {
    "version": "2.0",
    "template": {
        "outputs": [
            {
                "simpleText": {
                    "text": "오류가 발생했습니다.\n잠시후 다시 시도해주세요."
                }
            }
        ],
        "quickReplies": [
            {
                "messageText": "홈 으로",
                "action": "message",
                "label": "홈"
            },
            {
                "messageText": "뒤로 가기",
                "action": "message",
                "label": "↩"
            }
        ]
    }
}

const successResponse = {
    "version": "2.0",
    "template": {
        "outputs": [
            {
                "simpleText": {
                    "text": ""
                }
            }
        ],
        "quickReplies": []
    }
}

module.exports = {
    errorResponse, successResponse
}