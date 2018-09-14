let friends = {
    array : [
        {
            "name": 'Rock',
            "photo": "https://2.wlimg.com/product_images/bc-full/2018/8/3213433/boulder-rock-stone-1534911994-4216629.jpeg",
            "scores": [5, 1, 2, 5, 5, 4, 1, 2, 3, 4]
        },
        {
            "name": '2-Dodecylbenzenesulfonic acid',
            "photo": "https://image.chemsrc.com/caspic/447/26836-07-7.png",
            "scores": [1, 4, 5, 1, 2, 1, 4, 4, 5, 2]
        },
        {
            "name": 'Jete',
            "photo": "https://davidmcgloin.files.wordpress.com/2011/06/darcey_bussell_grand_jete.jpg?w=500&h=402",
            "scores": [4, 2, 1, 4, 4, 1, 5, 4, 1, 4]
        },
        {
            "name": 'God',
            "photo": "https://davidmcgloin.files.wordpress.com/2011/06/darcey_bussell_grand_jete.jpg?w=500&h=402https://assets1.bigthink.com/system/idea_thumbnails/61210/size_1024/a-loving-god.jpg?1467485710",
            "scores": [1, 1, 3, 1, 2, 5, 1, 4, 5, 5]
        },
        {
            "name": 'Quarter-Note',
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Quarter_note_with_upwards_stem.svg/614px-Quarter_note_with_upwards_stem.svg.png",
            "scores": [4, 4, 5, 2, 3, 1, 5, 3, 3, 4]
        },
        {
            "name": 'White-Throated Sparrow',
            "photo": "https://cdn.audubon.org/cdn/farfuture/huODJSHSZ2QFEtwvp1IFKgbiso11p5ymFLB8Iw-Gsvc/mtime:1422549814/sites/default/files/White-throated%2520Sparrow%2520r30-1-035_l_1.jpg",
            "scores": [4, 5, 2, 1, 3, 2, 5, 2, 2, 5]
        },
        {
            "name": 'Milliliter',
            "photo": "http://s3.amazonaws.com/rapgenius/VLC086_Milliliter_of_water.jpg",
            "scores": [1, 2, 3, 1, 1, 5, 4, 4, 5, 3]
        },
        {
            "name": 'Potato Chip',
            "photo": "https://s3.amazonaws.com/ucdim/wp-content/uploads/20180312095334/Mar_11_NationalPotatoChipDay_Body1_137061058-e1520728826776.jpg",
            "scores": [5, 5, 5, 4, 4, 2, 2, 2, 3, 3]
        }
    ],

    friendFinder: function (userArr) {
        let minDifference = 100;
        let bestFriendInd = 0;
        this.array.forEach((friend, index1) => {
            let difference = 0;
            friend.scores.forEach((score, index2) => {
                difference += Math.abs(score - userArr[index2]);
            });
            if (difference < minDifference) {
                minDifference = difference;
                bestFriendInd = index1;
            }
        })
        return this.array[bestFriendInd];
    }
}

module.exports = friends;