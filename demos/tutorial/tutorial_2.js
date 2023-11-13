var Tutorial = {};

text = [];
introlst = [];

text[0] = "2+3";
introlst[0] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、ブロックで2+3を作ります。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "出てきたブロックの中から四則演算ブロックをドラッグして\nメインスペースへ"
                }
            ],
            [
                {
                    "intro": "これで、プラスのブロックを配置できました。\n次に、プラスブロックのふたつの穴に数字を入れます。\n数字ブロックは四則演算メニューにあります。"
                }
            ],
            [],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 0
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "四則演算ブロックの左側にはめます"
                }
            ],
            [],
            [
                {
                    "intro": "値を変更するには、数字のところをクリックして\nキーボードから入力します。\n"
                }
            ],
            [
                {
                    "intro": "最後に、もうひとつの穴にも整数ブロックを入れて\n値を 3 に変更しましょう。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "A"
        ],
        "value": [
            "2",
            "2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "2 + 3 のブロックが完成しました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 2,
        "target": [
            0,
            "B"
        ],
        "value": [
            "3",
            "3"
        ]
    }
];

text[1] = "変数定義";
introlst[1] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、width という名前の変数を定義します。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [
                {
                    "intro": "これで変数 width を定義する let ブロックを配置できました。\n変数 width の値は 500 にしてみましょう。"
                }
            ],
            [],
            []
        ],
        "category": 8,
        "block": 1,
        "id": 0
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "数字ブロックを let ブロックにつなげましょう。\n"
                }
            ],
            [],
            [],
            [
                {
                    "intro": "これで width という変数を定義して、その値を 500 とすることが\nできました。\nwidth という変数は、この let ブロックの下で使うことができます。\n"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "EXP1"
        ],
        "value": [
            "500",
            "500"
        ]
    }
];

text[17] = "変数の使用";
introlst[17] = [
    {
        "text": [
            [
                {
                    "intro": "変数widthを使って、width の半分を表す half という変数を定義してみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "half の値は width の半分にしたいので、\n四則演算ブロックを使います。"
                }
            ],
            [
                {
                    "intro": "let ブロックをドラッグして、width を定義する let ブロックの下に\nつなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "次に、変数名を half に変更します。\n変数名をクリックして、Rename variable... を選択します。出てきたダイアログの入力欄にhalf と入力して OK を押します。"
                }
            ],
            []
        ],
        "category": 9,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "NEXT"
        ],
        "name": "half",
	"bubble": ["","","","","変数名をクリックしてRename variable...をクリックし、","","","",""]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "足し算ブロックをドラッグして half を定義する let ブロックに\nつなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "+ をクリックして / に変更します。"
                }
            ],
            [
                {
                    "intro": "ここで、いよいよ変数 width を使います。\nwidth をドラッグして、割り算ブロックの左側につなぎます。\n（変数ブロックは、自分の下のブロックでしか使えません。）"
                }
            ]
        ],
        "category": 0,
        "block": 1,
        "id": 2,
        "target": [
            1,
            "EXP1"
        ],
        "value": [
            "/",
            "DIVIDE_INT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "割り算ブロックの右側には、数字の 2 を入れます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "A",
        ],
	"bubble": ["","","","","","","赤枠のブロックの変数名を","",""]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして、割り算ブロックの右側に\nつなぎます。"
                }
            ],
            [],
            [],
            [
                {
                    "intro": "これで width の半分を示す変数 half を定義できました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 4,
        "target": [
            2,
            "B"
        ],
        "value": [
            "2",
            "2"
        ]
    }
];

text[2] = "関数定義";
introlst[2] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、関数 f(x) = x + 1 を作ります。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [
                {
                    "intro": "関数 f の引数（パラメタ）のブロックは「パ」ボタンにあります。"
                }
            ],
            [],
            []
        ],
        "category": 9,
        "block": 1,
        "id": 0
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "変数のブロックを let ブロックの最初のコネクタにつなぎます。\n"
                }
            ],
            [],
            [
                {
                    "intro": "変数の名前を x に変更しましょう。\n変数名をクリックして、Rename variable... を選択し、\nx に変更して OK を押します。"
                }
            ],
            []
        ],
        "workbench": [
            0,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "ARG0"
        ],
        "name": "x"
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "f(x) の本体部分は x + 1 なので、\n足し算ブロックをメインスペースにドラッグして、let ブロックのふたつ目のコネクタにつなぎます"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "x をドラッグして、足し算ブロックの左側のコネクタにつなぎます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 2,
        "target": [
            0,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "足し算ブロックの右側には、数字の 1 を入れます。"
                }
            ],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "A"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして、足し算ブロックの右側に\nつなぎます。"
                }
            ],
            [],
            [],
            [
                {
                    "intro": "これで関数 f を表すブロックができました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 4,
        "target": [
            2,
            "B"
        ],
        "value": [
            "1",
            "1"
        ]
    }
];

text[18] = "関数の使用"
introlst[18] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、f(3) の値を計算してみましょう。\nまず、関数 f のブロックの下に、もうひとつ変数ブロックをつなげます。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "変数定義ブロックをドラッグして関数 f のブロックの下につなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "関数を使うには、関数名をドラッグします。\nf をドラッグして変数ブロックにつなげましょう。"
                }
            ],
            []
        ],
        "category": 9,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "NEXT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "f の引数には 3 を入れます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして、f のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [
                {
                    "intro": "これで f(3) を表すブロックができました。\n値をみるためには実行ボタンを押します。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "PARAM0"
        ],
        "value": [
            "3",
            "3"
        ]
    }
];

text[19] = "2引数関数に変更";
introlst[19] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、関数 f を２引数関数 f(x, y) = x + y に変更してみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "parameter を右側の parameter の下に追加します"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "newvalue": "2",
        "oldvalue": "1",
        "add": true
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "これで、fの引数が2つに増えました。\nfのブロックの穴の数も2つになりました。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            0,
            false
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "変数のブロックを f のブロックのふたつ目のコネクタにつなぎます。\n"
                }
            ],
            [],
            [
                {
                    "intro": "変数の名前を y に変更しましょう。\n変数名をクリックして、Rename variable... を選択し、\ny に変更して OK を押します。"
                }
            ],
            []
        ],
        "workbench": [
            0,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 4,
        "target": [
            0,
            "ARG1"
        ],
        "name": "y"
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "f の本体の 1 のブロックを変数 y のブロックに置き換えます。\nまず、1 のブロックをドラッグしてゴミ箱に移動します。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "y をドラッグして、足し算ブロックの右側のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "trash": 1
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "f(3, 4) を求めるには、f の新しくできた穴に 4 を入れます。"
                }
            ],
            []
        ],
        "variable": 4,
        "category": 10,
        "block": 0,
        "id": 5,
        "target": [
            2,
            "B"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして、f のふたつ目のコネクタにつなぎます。\n"
                }
            ],
            [],
            [],
            [
                {
                    "intro": "これで f(3, 4) を表すブロックができました。\n値をみるためには実行ボタンを押します。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 6,
        "target": [
            3,
            "PARAM1"
        ],
        "value": [
            "4",
            "4"
        ]
    }
];

text[3] = "widthとheightの指定";
introlst[3] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、big_bang ブロックでwidthとheightを指定します。"
                },
                {
                    "intro": "big_bang ブロックのいろいろな機能は、歯車ボタンを使って使えるようにします。"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "画面の高さを指定できるようにするには ~height ブロックをドラッグして、右の big_bang のところにつなげます"
                }
            ],
            [
                {
                    "intro": "画面の幅を指定できるようにするには ~width ブロックをドラッグして、右の big_bang のところにつなげます"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "open": false,
        "bigbang": true,
        "newvalue": "width=\"1\"",
        "oldvalue": null,
        "item": "world_width_item",
        "add": -1
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "open": true,
        "bigbang": true,
        "newvalue": "width=\"1\" height=\"1\"",
        "oldvalue": "width=\"1\"",
        "item": "world_height_item",
        "add": 1
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "これで、画面の幅と高さを指定できるようになりました。big_bangブロックにwidthとheightをつなげましょう。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            0,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 3,
        "target": [
            0,
            "WIDTH"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "widthとheightを指定できました。\n実行するとwidthとheightで指定下大きさの画面が出てきます。\n同様にして、他のブロックを右の big_bang のところにつなげると、その機能が使えるようになります。"
                }
            ],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 4,
        "target": [
            0,
            "HEIGHT"
        ]
    }
]

text[4] = "draw関数の登録";
introlst[4] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、draw 関数を big_bang に登録する方法をみます。"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "すると big_bang ブロックに draw 関数を登録する場所が現れます。"
                }
            ],
            [
                {
                    "intro": "draw 関数を登録するには ~to_draw ブロックをドラッグして、\n右の big_bang のところにつなげます"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            3
        ],
        "open": false,
        "bigbang": true,
        "newvalue": "width=\"1\" height=\"1\" draw=\"1\"",
        "oldvalue": "width=\"1\" height=\"1\"",
        "item": "world_draw_item",
        "add": 2
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "draw 関数を big_bang ブロックに登録するには、\nオプションキー（または alt キー）を押しながら\nドラッグして、big_bnag ブロックにつなげます。\nオプションキーを押すことで、引数なしのブロック（穴のあいて\nいないブロック）を作れるようになります。"
                }],
            [],
            [],
            []
        ],
        "mutator": [
            3,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、draw 関数の登録ができました。実行すると、ゲーム画面に四角が置かれた風景が表示されます。"
                }
            ],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 4,
        "target": [
            3,
            "DRAW"
        ],
	"alt": true
    }
]

text[5] = "on_tick関数の登録";
introlst[5] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、on_tick 関数を big_bang に登録する方法をみます。"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "すると big_bang ブロックに on_tick 関数を登録する場所が現れます。"
                }
            ],
            [
                {
                    "intro": "on_tick 関数を登録するには ~on_tick ブロックをドラッグして、\n右の big_bang のところにつなげます"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            1
        ],
        "open": false,
        "bigbang": true,
        "newvalue": "width=\"1\" height=\"1\" draw=\"1\" tick=\"1\"",
        "oldvalue": "width=\"1\" height=\"1\" draw=\"1\"",
        "item": "world_tick_item",
        "add": 3
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "on_tick 関数を big_bang ブロックに登録するには、\nオプションキー（または alt キー）を押しながら\nドラッグして、big_bnag ブロックにつなげます。\nオプションキーを押すことで、引数なしのブロック（穴のあいて\nいないブロック）を作れるようになります。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            1,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、on_tick 関数の登録ができました。\n実行して画像が動くことを確認しましょう。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "TICK"
        ],
	"alt": true
    }
];

text[6] = "座標";
introlst[6] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、座標を使って、世界を単にひとつの数字ではなく座標値にします。"
                },
                {
                    "intro": "on-tick関数を、「座標 (x, y) を受け取ったら、x方向に3、y方向に-1だけ移動した座標 (x+3, y-1) を返す関数」にしましょう。\n座標を受け取る関数を作るときには、 関数の引数（パラメタ）を座標にします。 "
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "座標 (pair) のブロックをon-tickブロックの最初のコネクタにつなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "すると、関数の本体部分では、受け取った座標のそれぞれの要素を使うことができるようになります。 座標のそれぞれの要素は普通の変数なので、ドラッグしたり、名前を変更したりすることができます。"
                }
            ],
            []
        ],
        "workbench": [
            0,
            3,
            1,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 3,
        "target": [
            0,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "引数名をxとyに変更しましょう。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 2,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "x"
    },
    {
        "text": [
            [
                {
                    "intro": "関数の本体部分は(x+3, y-1)にします。\n座標を使うには、「座標と世界の定義」メニューにある座標ブロックを使います。\n"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 3,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "y"
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "座標ブロックをon-tickブロックのふたつ目のコネクタにつなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "on-tick関数が返すx座標はx+3なので、四則演算ブロックを座標ブロックの左側につなぎます。"
                }
            ],
            []
        ],
        "category": 7,
        "block": 0,
        "id": 4,
        "target": [
            0,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "x をドラッグして、足し算ブロックの左側のコネクタにつなぎます。\n"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 5,
        "target": [
            4,
            "FIRST"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "足し算ブロックの右側には、数字の 3 を入れます。"
                }
            ],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 6,
        "target": [
            5,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "y座標はy-1なので、四則演算ブロックを座標ブロックの右側につなぎます。\n"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 7,
        "target": [
            5,
            "B"
        ],
        "value": [
            "3",
            "3"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "yをドラッグして、引き算ブロックの左側のコネクタにつなぎます。\n"
                }
            ]
        ],
        "category": 0,
        "block": 1,
        "id": 8,
        "target": [
            4,
            "SECOND"
        ],
        "value": [
            "-",
            "MINUS_INT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "引き算ブロックの右側には、数字の1を入れます。"
                }
            ],
            []
        ],
        "variable": 3,
        "category": 10,
        "block": 0,
        "id": 9,
        "target": [
            8,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで、座標を受け取って、座標を返す関数が完成しました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 10,
        "target": [
            8,
            "B"
        ],
        "value": [
            "1",
            "1"
        ]
    }
];

text[7] = "世界を数字から座標へ";
introlst[7] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、世界をひとつの数字から座標値に変更します。\n"
                },
                {
                    "intro": "まず、世界の初期値 0 のブロック、draw, on-tick の引数のブロックを削除します。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "trash": 8
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "trash": 1
    },
    {
        "text": [
            [
                {
                    "intro": "引数を削除すると、対応する変数ブロックも削除されます。"
                },
                {
                    "intro": "on-tick関数が返す値も削除します。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "trash": 5
    },
    {
        "text": [
            [
                {
                    "intro": "世界の初期値を (0, 150) にします。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "trash": 6
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "座標ブロックをbig-bang ブロックの最初のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            []
        ],
        "category": 7,
        "block": 0,
        "id": 9,
        "target": [
            7,
            "INITIAL_WORLD"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 10,
        "target": [
            9,
            "FIRST"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "draw 関数の引数を (x, y) にします。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 11,
        "target": [
            9,
            "SECOND"
        ],
        "value": [
            "150",
            "150"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "座標 (pair) のブロックをdrawブロックの最初のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            3,
            1,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 14,
        "target": [
            0,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "x を draw 関数の本体のx座標の部分に入れます。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "draw 関数本体の y座標の150 を消去して y を入れます。"
                }
            ],
            []
        ],
        "variable": 13,
        "category": 10,
        "block": 0,
        "id": 15,
        "target": [
            2,
            "FIRST"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "trash": 3
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "on-tick 関数の引数を (x, y) にします。"
                }
            ],
            []
        ],
        "variable": 14,
        "category": 10,
        "block": 0,
        "id": 16,
        "target": [
            2,
            "SECOND"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            4,
            3,
            1,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 19,
        "target": [
            4,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "引数名をxとyに変更します。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            4,
            -1
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 18,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "x"
    },
    {
        "text": [
            [
                {
                    "intro": "関数の本体部分は(x+3, y-1)にします。\n座標ブロックをon-tickブロックのふたつ目のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 19,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "y"
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "x座標はx+3なので、四則演算ブロックを座標ブロックの左側につなぎます。\n"
                }
            ],
            []
        ],
        "category": 7,
        "block": 0,
        "id": 20,
        "target": [
            4,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "x をドラッグして、足し算ブロックの左側のコネクタにつなぎます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 21,
        "target": [
            20,
            "FIRST"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "足し算ブロックの右側には、数字の 3 を入れます。"
                }
            ],
            []
        ],
        "variable": 18,
        "category": 10,
        "block": 0,
        "id": 22,
        "target": [
            21,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "y座標はy-1なので、四則演算ブロックを座標ブロックの右側につなぎます。\n"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 23,
        "target": [
            21,
            "B"
        ],
        "value": [
            "3",
            "3"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "yをドラッグして、引き算ブロックの左側のコネクタにつなぎます。"
                }
            ]
        ],
        "category": 0,
        "block": 1,
        "id": 24,
        "target": [
            20,
            "SECOND"
        ],
        "value": [
            "-",
            "MINUS_INT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "引き算ブロックの右側には、数字の1を入れます。"
                }
            ],
            []
        ],
        "variable": 19,
        "category": 10,
        "block": 0,
        "id": 25,
        "target": [
            24,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで、世界が数字から座標値に変わりました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 26,
        "target": [
            24,
            "B"
        ],
        "value": [
            "1",
            "1"
        ]
    }
];

text[8] = "条件文";
introlst[8] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、条件文を使った関数を作ります。\n受け取った数が 0 だったら 0 を返し、そうでなければ受け取った数から 1 を引いた数を返す関数を作りましょう。\n"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [
                {
                    "intro": "引数ブロックをletブロックの1つめのコネクタにつなげ、名前をxに変更します。\n"
                }
            ],
            [],
            []
        ],
        "category": 9,
        "block": 1,
        "id": 0
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "条件によって場合分けをするには、if ブロックを使います。 if ブロックは「論理演算と条件文」メニューにあります。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 1,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "x"
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "ifブロックをletブロックの2つめのコネクタにつなげます。"
                }
            ],
            [],
            [
                {
                    "intro": " if ブロックには３つのブロックを接続します。１つ目のブロックは、場合分けの条件を表すブロックです。\n条件部分には「論理演算と条件文」メニューにある各種の演算を使うことができます。\n"
                }
            ],
            []
        ],
        "category": 2,
        "block": 3,
        "id": 2,
        "target": [
            0,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "今回の条件はx=0なので、=のブロックをif ブロックの1つめのコネクタにつなげます。"
                }
            ],
            [],
            [
                {
                    "intro": "xをドラッグして=ブロックの左側のコネクタにつなぎます。\n"
                }
            ],
            []
        ],
        "category": 2,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "IF"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "=ブロックの右側に0を入れます。"
                }
            ],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 4,
        "target": [
            3,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "Ifブロックにつなぐ２つ目のブロックは、条件が成り立った場合に実行するブロックです。\n関数fは条件が成り立つ場合0を返すので、数字ブロックをif ブロックの2つめのコネクタにつなげます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 5,
        "target": [
            3,
            "B"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "Ifブロックにつなぐ３つ目のブロックは、条件が成り立たなかった場合に実行するブロックです。\n条件が成り立たない場合はx-1を返すので、四則演算ブロックをif ブロックの3つめのコネクタにつなげます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 6,
        "target": [
            2,
            "THEN"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "xをドラッグして引き算ブロックの左側のコネクタにつなぎます。\n"
                }
            ]
        ],
        "category": 0,
        "block": 1,
        "id": 7,
        "target": [
            2,
            "ELSE"
        ],
        "value": [
            "-",
            "MINUS_INT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "引き算ブロックの右側には1を入れます。"
                }
            ],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 8,
        "target": [
            7,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "このようにブロックを接続すると、まず条件部分が成り立つかどうかを調べ、 成り立ったら２つ目のブロックを、 成り立たなかったら３つ目のブロックを実行します。 （選ばれなかったブロックは実行することなく無視されます。）\n"
                },
                {
                    "intro": "関数 f を、「受け取った数が 0 だったら 0 を返し、正なら受け取った数に 1 を足した数を返し、負なら受け取った数から 1 を引いた数を返す関数」に変更してみましょう。"
                },
                {
                    "intro": "if ブロックの歯車ボタンを押して else if then というブロックを 右側につけると、if ブロックのコネクタが増えて、 複数回の条件分岐を行うことができるようになります。 "
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 9,
        "target": [
            7,
            "B"
        ],
        "value": [
            "1",
            "1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            2
        ],
        "open": false,
        "newvalue": "1",
        "oldvalue": "0",
        "add": true
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "2回めの条件はx>0なので、比較演算ブロックをif ブロックの3番めのコネクタにつなげて、=をクリックして>に変えます。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            2,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "xをドラッグして>ブロックの左側のコネクタにつなぎます。"
                }
            ]
        ],
        "category": 2,
        "block": 0,
        "id": 10,
        "target": [
            2,
            "ELSEIF0"
        ],
        "value": [
            ">",
            "GT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": ">ブロックの右側に0を入れます。"
                }
            ],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 11,
        "target": [
            10,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "2個めの条件が成り立つ場合はx+1 を返すので、四則演算ブロックをif ブロックの4つめのコネクタにつなげます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 12,
        "target": [
            10,
            "B"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "xをドラッグして足し算ブロックの左側のコネクタにつなぎます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 13,
        "target": [
            2,
            "THEN0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "足し算ブロックの右側には1を入れます。"
                }
            ],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 14,
        "target": [
            13,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで、複数回の条件分岐を行うことができました。 "
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 15,
        "target": [
            13,
            "B"
        ],
        "value": [
            "1",
            "1"
        ]
    }
];

text[9] = "on_key関数の登録";
introlst[9] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、on_key 関数を big_bang に登録する方法をみます。"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "すると big_bang ブロックに on_key 関数を登録する場所が現れます。"
                }
            ],
            [
                {
                    "intro": "on_tick 関数を登録するには ~on_key_press ブロックをドラッグして、\n右の big_bang のところにつなげます"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            1
        ],
        "open": false,
        "bigbang": true,
        "newvalue": "width=\"1\" height=\"1\" draw=\"1\" tick=\"1\" keypress=\"1\"",
        "oldvalue":  "width=\"1\" height=\"1\" draw=\"1\" tick=\"1\"",
        "item": "world_keypress_item",
        "add": 1
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "on_key 関数を big_bang ブロックに登録するには、\nオプションキー（または alt キー）を押しながら\nドラッグして、big_bnag ブロックにつなげます。\nオプションキーを押すことで、引数なしのブロック（穴のあいて\nいないブロック）を作れるようになります。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            1,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、on_key 関数の登録ができました。実行してキーボードを押し、鳥を動かしてみましょう。\n"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "KEYPRESS"
        ],
	"alt": true
    }
];

text[10] = "真偽値";
introlst[10] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、座標を受け取ったら「その座標のx座標かy座標の少なくとも一方は負であるかどうか」を真偽値で返す関数をつくります。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [
                {
                    "intro": "座標 (pair) のブロックをletブロックの最初のコネクタにつなぎます。\n"
                }
            ],
            [],
            []
        ],
        "category": 9,
        "block": 1,
        "id": 0
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            3,
            1,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 3,
        "target": [
            0,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "「かつ」(&&) や「または」(||) のブロックは「論理演算と条件文」メニューにあります。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "論理演算ブロックをletブロックの2つめのコネクタにつなげます。"
                }
            ],
            [],
            [
                {
                    "intro": "&&をクリックして||に変えます。"
                }
            ],
            [
                {
                    "intro": "「または」の左側の式はx<0なので、比較演算ブロックを||ブロックの左側に入れて、=を<に変えます。"
                }
            ]
        ],
        "category": 2,
        "block": 1,
        "id": 4,
        "target": [
            0,
            "EXP1"
        ],
        "value": [
            "||",
            "OR"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "xをドラッグして<ブロックの左側のコネクタにつなぎます。"
                }
            ]
        ],
        "category": 2,
        "block": 0,
        "id": 5,
        "target": [
            4,
            "PARAM0"
        ],
        "value": [
            "<",
            "LT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "<ブロックの右側には0を入れます。"
                }
            ],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 6,
        "target": [
            5,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "同様に||ブロックの右側にはy<0のブロックがくるようにします。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 7,
        "target": [
            5,
            "B"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 2,
        "block": 0,
        "id": 8,
        "target": [
            4,
            "PARAM1"
        ],
        "value": [
            "<",
            "LT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 3,
        "category": 10,
        "block": 0,
        "id": 9,
        "target": [
            8,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、関数が完成しました。"
                },
                {
                    "intro": "関数を、「x<0、y<0、x>200の少なくとも1つは成り立つかどうか」を真偽値で返す関数に変更してみましょう。"
                },
                {
                    "intro": "歯車ボタンを押すと、複数個の「かつ」「または」をとることができます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 10,
        "target": [
            8,
            "B"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            4
        ],
        "open": false,
        "newvalue": "3",
        "oldvalue": "2",
        "add": true
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "これで「または」の数が1つ増えました。"
                },
                {
                    "intro": "3つめの式はx>200なので、比較演算ブロックを||ブロックの1番右側に入れて、=を>に変えます。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            4,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "xをドラッグして>ブロックの左側のコネクタにつなぎます。\n"
                }
            ]
        ],
        "category": 2,
        "block": 0,
        "id": 11,
        "target": [
            4,
            "PARAM2"
        ],
        "value": [
            ">",
            "GT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": ">ブロックの右側には200を入れます。"
                }
            ],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 12,
        "target": [
            11,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで、真偽値を使った関数ができました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 13,
        "target": [
            11,
            "B"
        ],
        "value": [
            "200",
            "200"
        ]
    }
];

text[11] = "stop_when関数の登録";
introlst[11] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、stop_when 関数を big_bang に登録する方法をみます。"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "すると big_bang ブロックに stop_when 関数を登録する場所が現れます。"
                }
            ],
            [
                {
                    "intro": "stop_when 関数を登録するには ~stop_when ブロックをドラッグして、\n右の big_bang のところにつなげます"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            1
        ],
        "open": false,
        "bigbang": true,
        "newvalue": "draw=\"1\" tick=\"1\" keypress=\"1\" stop=\"1\"",
        "oldvalue": "draw=\"1\" tick=\"1\" keypress=\"1\"",
        "item": "world_stop_item",
        "add": 1
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "stop_when 関数を big_bang ブロックに登録するには、\nオプションキー（または alt キー）を押しながら\nドラッグして、big_bnag ブロックにつなげます。\nオプションキーを押すことで、引数なしのブロック（穴のあいて\nいないブロック）を作れるようになります。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            1,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、stop_when 関数の登録ができました。\n"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "STOP"
        ]
    }
];

text[12] = "レコード定義";
introlst[12] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、レコードを宣言します。りんごとバナナのy座標からなるレコード型fruit_t を定義しましょう。\nレコード定義のブロックは「座標と世界の定義」メニューにあります。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [
                {
                    "intro": "レコード名をクリックしてRename record name…を選択し、fruit_tに変えましょう。"
                }
            ],
            [],
            []
        ],
        "category": 7,
        "block": 2,
        "id": 0
    },
    {
        "text": [
            [
                {
                    "intro": "fruit_tは2つのフィールドからなります。歯車ボタンを押すと フィールドを増やすことができます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 0,
        "skip": true,
        "category": 10,
        "block": 0,
        "namefield": "DATANAME",
        "name": "fruit_t"
    },
    {
        "text": [
            [
                {
                    "intro": "これでフィールドが2つに増えました。"
                }
            ],
            [
                {
                    "intro": "fieldブロックを右側のfieldの下に追加します。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "open": false,
        "newvalue": "2",
        "oldvalue": "1",
        "add": true
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "1つ目のフィールドはint型のappleです。フィールド名をクリックしてRename record field…を選択し、appeに変えましょう。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            0,
            false
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "「型」ボタンを押すと、 各フィールドの型を指定するブロックが現れます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 0,
        "skip": true,
        "category": 10,
        "block": 0,
        "namefield": "FIELD0",
        "name": "apple"
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "appleフィールドの型はintなのでintブロックを1つ目のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            0
        ],
        "id": 1,
        "target": [
            0,
            "FIELD_INP0"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "2つ目のフィールドはbananaです。フィールド名をbananaに変えましょう。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "bananaフィールドの型はintなのでintブロックを2つ目のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 0,
        "skip": true,
        "category": 10,
        "block": 0,
        "namefield": "FIELD1",
        "name": "banana"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            0
        ],
        "id": 2,
        "target": [
            0,
            "FIELD_INP1"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "これで、apple, banana という 2つのフィールドからなるレコード型 fruit_t を定義できました。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    }
];

text[13] = "レコードを受け取る関数";
introlst[13] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、レコードを受け取る関数を作ります。\n「fruit_t 型のレコードを受け取ると、そのレコードの各フィールドにそれぞれ10を加えたレコードを返す関数add10」を作ってみましょう。\nまず、関数ブロックをfruit_tを定義するブロックの下につなぎます。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "関数名をadd10に変更します。"
                }
            ],
            []
        ],
        "category": 9,
        "block": 1,
        "id": 1,
        "target": [
            0,
            "NEXT"
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "レコードを受け取る場合は、関数の引数をレコードのパターンにします。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 1,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "add10"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            1,
            5,
            1,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 4,
        "target": [
            1,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "appleフィールドの要素の名前をayに変更しましょう。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            1,
            -1
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "bananaフィールドの要素の名前をbyに変更しましょう。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 3,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "ay"
    },
    {
        "text": [
            [
                {
                    "intro": "Add10はfruit_t型のレコードを返します。fruit_tをドラッグしてletブロックの2つ目のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 4,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "by"
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "appleフィールドはay+10にしましょう。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 5,
        "target": [
            1,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 6,
        "target": [
            5,
            "FIELD_INP0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 3,
        "category": 10,
        "block": 0,
        "id": 7,
        "target": [
            6,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "bananaフィールドはby+10にしましょう。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 8,
        "target": [
            6,
            "B"
        ],
        "value": [
            "10",
            "10"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 9,
        "target": [
            5,
            "FIELD_INP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 4,
        "category": 10,
        "block": 0,
        "id": 10,
        "target": [
            9,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで、add10が定義できました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 11,
        "target": [
            9,
            "B"
        ],
        "value": [
            "10",
            "10"
        ]
    }
];

text[14] = "big_bang";
introlst[14] = [
    {
        "text": [
            [
                {
                    "intro": "big_bangブロックを使って真っ白な画面を作ってみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "0をbig_bangブロックにつなげます。"
                }
	    ],
            [],
            [],
            [],
            []
        ],
        "category": 8,
        "block": 8,
        "id": 0
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "ブロックが完成しました。実行してみましょう。真っ白な四角の画面が出てきます。この先、これがゲーム画面になっていきます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "INITIAL_WORLD"
        ]
    }
];

text[15] = "empty_scene";
introlst[15] = [
    {
        "text": [
            [
                {
                    "intro": "空の風景を返すdraw関数を作ってみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 8,
        "block": 3,
        "id": 2,
        "target": [
            1,
            "NEXT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            2,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "ARG0"
        ],
	"name" : "world"
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "空の風景は、empty_scene というブロックを使って作成します。 このブロックは「風景」メニューにあります。\n"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            2,
            -1
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "empty_sceneブロックの1つ目の穴には、sceneの横幅の値が入ります。ここでは、横幅はwidthにしましょう。"
                }
            ],
            []
        ],
        "category": 5,
        "block": 0,
        "id": 4,
        "target": [
            2,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "2つ目の穴にはsceneの縦幅が入ります。ここではheightを入れましょう。"
                }
            ],
            []
        ],
	"variable" : 0,
        "category": 10,
        "block": 0,
        "id": 5,
        "target": [
            4,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、空の風景を返すdraw関数ができました。この関数は、この先のチュートリアルでbig_bangに登録して使います。"
                }
            ],
            []
        ],
	"variable" : 1,
        "category": 10,
        "block": 0,
        "id": 6,
        "target": [
            4,
            "PARAM1"
        ]
    }
];

text[16] = "四角の画像";
introlst[16] = [
    {
        "text": [
            [
                {
                    "intro": " 空の風景に四角の画像を載せた風景を返すdraw関数を作ってみましょう。画像を載せるには、place_image というブロックを使います。 これは「風景」メニューにあります。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "place_imageブロックの1つ目のコネクタには、配置したい画像のブロックをつなげます。「画像」メニューにあるrectangleブロックを繋げましょう。"
                }
            ],
            []
        ],
        "category": 5,
        "block": 1,
        "id": 3,
        "target": [
            2,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "rectangleブロックの引数のブロックの値を変えることで四角の大きさや色を変えることができます。"
                },
                {
                    "intro": "place_imageブロックの2つ目のコネクタには画像を置く場所の (x, y) 座標のブロックをつなげます。座標ブロックは「座標と世界の定義」メニューにあります。"
                }
            ],
            []
        ],
        "category": 4,
        "block": 3,
        "id": 4,
        "target": [
            3,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "画像を置く場所は(50, 50)にしましょう。"
                }
            ],
            []
        ],
        "category": 7,
        "block": 0,
        "id": 8,
        "target": [
            3,
            "PARAM1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 9,
        "target": [
            8,
            "FIRST"
        ],
        "value": [
            "50",
            "50"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "place_imageブロックの3つ目のコネクタには、画像が置かれる元の風景のブロックをつなぎます。ここでは、empty_sceneブロックをつなぎましょう。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 10,
        "target": [
            8,
            "SECOND"
        ],
        "value": [
            "50",
            "50"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 5,
        "block": 0,
        "id": 11,
        "target": [
            3,
            "PARAM2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
	"variable" : 0,
        "category": 10,
        "block": 0,
        "id": 12,
        "target": [
            11,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、四角の画像が載った風景が完成しました。関数をbig_bangに登録すると、ここで作った風景がゲーム画面に表示されます。"
                }
            ],
            []
        ],
	"variable": 1,
        "category": 10,
        "block": 0,
        "id": 13,
        "target": [
            11,
            "PARAM1"
        ]
    }
];

text[20] = "worldを使ったdraw関数";
introlst[20] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、draw 関数の中で引数の world を使ってみましょう。四角のy座標を50からworldにします。まずは50のブロックをゴミ箱に捨てましょう。\n"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "worldをドラッグして座標ブロックの右側に入れましょう。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "trash": 2
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、四角のy座標がworldになりました。ここではworldの初期値は0なので、四角の座標は(50, 0)になります。実行して確認してみましょう。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 3,
        "target": [
            1,
            "SECOND"
        ]
    }
];

text[21] = "on_tick関数";
introlst[21] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、1tickごとに世界の値を10増やすon_tick関数を定義します。\non_tick 関数は「ゲーム用の定義」メニューにあります。 "
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "on_tickブロックをdrawブロックとbig_bangブロックの間に入れましょう。"
                }
            ],
            [],
            [],
            []
        ],
        "category": 8,
        "block": 4,
        "id": 1,
        "target": [
            0,
            "NEXT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            1,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "引数名をworldに変更しましょう。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            1,
            -1
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "関数の本体部分は、world + 10です。足し算ブロックをon_tickブロックの2つめのコネクタにつなぎましょう。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 2,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "world"
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "worldをドラッグして、足し算ブロックの左側につなぎます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 3,
        "target": [
            1,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "足し算ブロックの右側には数字の10を入れます。"
                }
            ],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 4,
        "target": [
            3,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで、on_tick関数が完成しました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 5,
        "target": [
            3,
            "B"
        ],
        "value": [
            "10",
            "10"
        ]
    }
];

text[22] = "rateの指定";
introlst[22] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、rateの指定をしましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "rateを登録するには ~rate ブロックをドラッグして、右の big_bang のところにつなげます。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "open": false,
        "bigbang": true,
        "newvalue": "width=\"1\" height=\"1\" draw=\"1\" tick=\"1\" rate=\"1\"",
        "oldvalue": "width=\"1\" height=\"1\" draw=\"1\" tick=\"1\"",
        "item": "world_rate_item",
        "add": 4
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "これで、rateを指定できるようになりました。rateを500にしてみましょう。\n"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            0,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "rateを指定できました。実行して1 tick の時間が変わっていることを確認しましょう。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "RATE"
        ],
        "value": [
            "500",
            "500"
        ]
    }
];

text[23] = "mod";
introlst[23] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、modを使って、画像が下にはみ出たら上から戻ってくるようにon_tick関数を変更します。"
                },
                {
                    "intro": "on_tick関数の本体部分world+10を、(world+10) mod heightにします。まずはworld+10をごみ箱に捨てましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "四則演算ブロックをon_tickブロックの2つめのコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "trash": 3
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "modの左側はworld+10なので四則演算ブロックをmodブロックの左側に入れます。"
                }
            ]
        ],
        "category": 0,
        "block": 1,
        "id": 4,
        "target": [
            1,
            "EXP1"
        ],
        "value": [
            "mod",
            "MOD_INT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "worldをドラッグして足し算ブロックの左側に入れます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 5,
        "target": [
            4,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "足し算ブロックの右側は数字の10を入れます。"
                }
            ],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 6,
        "target": [
            5,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "height をドラッグしてmodブロックの右側に入れます。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 7,
        "target": [
            5,
            "B"
        ],
        "value": [
            "10",
            "10"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、on_tick関数が完成しました。実行すると、四角が下にはみ出たら上から戻ってきます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 8,
        "target": [
            4,
            "B"
        ]
    }
]

text[24] = "レコードの作成";
introlst[24] = [
    {
        "text": [
            [
                {
                    "intro": "レコードを宣言すると、そのブロックの下ではレコードを具体的に作ることができます。fruit_t型の具体的なレコードを作りましょう。"
                },
                {
                    "intro": "appleフィールドの値が0、bananaフィールドの値が50のレコードfruit_zahyoを作ってみましょう。\nまず、変数ブロックをfruit_tを定義するブロックの下につなぎます。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "変数名をfruit_zahyoに変更します。"
                }
            ],
            []
        ],
        "category": 9,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "NEXT"
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "具体的なレコードを作るには、レコードの名前のところをドラッグします。fruiti_tをドラッグしてfruit_zahyoのブロックにつなぎましょう。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 1,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "fruit_zahyo"
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "ドラッグしたレコードは指定したフィールドを持っており、 そこには具体的な値を入れることができます"
                },
                {
                    "intro": "appleフィールドの値は0です。レコードブロックの1つめのコネクタに数字ブロックをつなぎます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "bananaフィールドの値は50です。レコードブロックの2つめのコネクタに数字ブロックをつなぎます。\n"
                }
            ],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "FIELD_INP0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで、レコードを作ることができました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 4,
        "target": [
            2,
            "FIELD_INP1"
        ],
        "value": [
            "50",
            "50"
        ]
    }
];

text[25] = "レコードのdraw関数";
introlst[25] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、引数がレコードのdraw関数を作ります。受け取る世界に応じてそらの背景の上にりんごを描画してみましょう。\n"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "引数はworld_t型のレコードを選択します。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            3,
            5,
            1,
            1,
            1,
            1,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 9,
        "target": [
            3,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "各フィールドの変数名をay、by、my、x、scoreに変更しましょう。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            3,
            -1
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 5,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "ay"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 6,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "by"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 7,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "my"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 8,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "x"
    },
    {
        "text": [
            [
                {
                    "intro": "draw関数が返すものは、empty_sceneにそらの画像を置き、さらにその上にりんごを置いた風景です。まずは、draw関数の2つめのコネクタにplace_imageブロックをつなぎましょう。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 9,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "score"
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "配置する画像はりんごの画像です。place_imageブロックの1つ目のコネクタにread_imageブロックをつなげます。\n"
                }
            ],
            []
        ],
        "category": 5,
        "block": 1,
        "id": 10,
        "target": [
            3,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "read_imageブロックのURL部分を”http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png”に変更しましょう。"
                }
            ],
            []
        ],
        "category": 4,
        "block": 2,
        "id": 11,
        "target": [
            10,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "place_imageブロックの2つ目のコネクタに座標ブロックをつなげます。"
                }
            ]
        ],
        "category": 1,
        "block": 0,
        "id": 12,
	"skip" : true,
        "value": [
            "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png",
            "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "りんごの座標は(200, ay)です。座標ブロックの左側は数字の200を入れます。"
                }
            ],
            []
        ],
        "category": 7,
        "block": 0,
        "id": 15,
        "target": [
            10,
            "PARAM1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "ayをドラッグして座標ブロックの右側に入れます。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 16,
        "target": [
            15,
            "FIRST"
        ],
        "value": [
            "200",
            "200"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "りんごの画像はそらが描かれた風景の上に置くので、place_imageブロックの3つめのコネクタにplace_imageブロックをつなぎましょう。"
                }
            ],
            []
        ],
        "variable": 5,
        "category": 10,
        "block": 0,
        "id": 17,
        "target": [
            15,
            "SECOND"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "配置する画像はそらの画像です。place_imageブロックの1つ目のコネクタにread_imageブロックをつなげます。"
                }
            ],
            []
        ],
        "category": 5,
        "block": 1,
        "id": 18,
        "target": [
            10,
            "PARAM2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "そらの背景は横幅width、縦幅heightにします。read_imageブロックの2つ目と3つ目のコネクタについている横幅と縦幅の数字のブロックを消去しましょう。"
                }
            ],
            []
        ],
        "category": 4,
        "block": 2,
        "id": 19,
        "target": [
            18,
            "PARAM0"
        ],
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "trash": 21
    },
    {
        "text": [
            [
                {
                    "intro": "そらの画像の横幅はwidthです。widthをドラッグしてread_imageブロックの2つ目のコネクタにつなげます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "trash": 22
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "そらの画像の縦幅はheightです。heightをドラッグしてread_imageブロックの3つ目のコネクタにつなげます。"
                }
            ],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 23,
        "target": [
            19,
            "PARAM1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "place_imageブロックの2つ目のコネクタに座標ブロックをつなげます。"
                }
            ],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 24,
        "target": [
            19,
            "PARAM2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "そらの座標は(400, 250)です。数字の400を座標ブロックの左側に入れます。"
                }
            ],
            []
        ],
        "category": 7,
        "block": 0,
        "id": 25,
        "target": [
            18,
            "PARAM1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "座標ブロックの右側は数字の250を入れます。\n"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 26,
        "target": [
            25,
            "FIRST"
        ],
        "value": [
            "400",
            "400"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "そらの画像はempty_sceneの上におきます。place_imageブロックの3つめのコネクタにempty_sceneブロックをつなぎます。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 27,
        "target": [
            25,
            "SECOND"
        ],
        "value": [
            "250",
            "250"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "empty_sceneの横幅はwidth、縦幅はheightにしましょう。"
                }
            ],
            []
        ],
        "category": 5,
        "block": 0,
        "id": 28,
        "target": [
            18,
            "PARAM2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 29,
        "target": [
            28,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、draw関数が完成しました。"
                }
            ],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 30,
        "target": [
            28,
            "PARAM1"
        ]
    }
];

text[26] = "得点の表示";
introlst[26] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、draw関数を、ゲーム画面に得点を表示させるように変更します。まずはplace_imageブロックとplace_imageブロックの間に新しくplace_imageブロックを入れます。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "外れたplace_imageブロックをplace_imageブロックの3つ目のコネクタにつなぎましょう。"
                }
            ],
            []
        ],
        "category": 5,
        "block": 1,
        "id": 4,
        "target": [
            2,
            "PARAM2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "文字列を表示するにはtextブロックを使います。\nplace_imageブロックの1つ目のコネクタにつなぎましょう。"
                }
            ],
            []
        ],
        "category": 5,
        "block": 1,
        "id": 3,
        "target": [
            4,
            "PARAM2"
        ],
	"skip2" : true
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "textブロックの左にはまっている文字列ブロックを消去します。"
                }
            ],
            []
        ],
        "category": 4,
        "block": 7,
        "id": 5,
        "target": [
            4,
            "PARAM0"
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "得点は数字であるため、画面に表示するには文字列に変換する必要があります。そのためには「文字列」メニューにあるstring_of_intブロックを使います。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "trash": 6
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "string_of_intブロックをtextブロックの左の穴に入れます。"
                }
            ],
            [],
            [
                {
                    "intro": "scoreをドラッグしてstring_of_intブロックに入れましょう。"
                }
            ],
            []
        ],
        "category": 1,
        "block": 2,
        "id": 9,
        "target": [
            5,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "textブロックにはまっている数字ブロックの値を変更すると文字の大きさが変わります。大きさを50にしましょう。"
                }
            ],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 10,
        "target": [
            9,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "得点は鳥の画像の位置に表示させます。place_imageブロックの2つ目のコネクタには(x, 458)のブロックをつなげます。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 7,
	"skip" : true,
        "value": [
            "50",
            "50"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 7,
        "block": 0,
        "id": 11,
        "target": [
            4,
            "PARAM1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 12,
        "target": [
            11,
            "FIRST"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "実行すると、ゲーム画面に得点が表示されます。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 13,
        "target": [
            11,
            "SECOND"
        ],
        "value": [
            "458",
            "458"
        ]
    }
];

text[27] = "レコードのon_tick関数";
introlst[27] = [
    {
        "text": [
            [
                {
                    "intro": "on_tick関数の引数をレコードにしてみましょう。ここでは、りんごのy座標だけが下に10動き、他の値は変わらない世界を返すようにします。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "引数はworld_t型のレコードを選択します。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            1,
            5,
            1,
            1,
            1,
            1,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 7,
        "target": [
            1,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "各フィールドの変数名をay、by、my、x、scoreに変更しましょう。\n"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            1,
            -1
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 3,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "ay"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 4,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "by"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 5,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "my"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 6,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "x"
    },
    {
        "text": [
            [
                {
                    "intro": "返すものはworld_t型の世界なのでworld_tをドラッグしてon_tick関数の2つ目のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 7,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "score"
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "りんごのy座標はay+10なので四則演算ブロックをappleフィールドの部分につなげます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 8,
        "target": [
            1,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "ayをドラッグして足し算ブロックの左側に入れます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 9,
        "target": [
            8,
            "FIELD_INP0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "足し算ブロックの右側は10にします。"
                }
            ],
            []
        ],
        "variable": 3,
        "category": 10,
        "block": 0,
        "id": 10,
        "target": [
            9,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "appe以外のフィールドは変わらないので、各フィールドにそれぞれby、my、x、scoreをつなげます。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 11,
        "target": [
            9,
            "B"
        ],
        "value": [
            "10",
            "10"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 4,
        "category": 10,
        "block": 0,
        "id": 12,
        "target": [
            8,
            "FIELD_INP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 5,
        "category": 10,
        "block": 0,
        "id": 13,
        "target": [
            8,
            "FIELD_INP2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 6,
        "category": 10,
        "block": 0,
        "id": 14,
        "target": [
            8,
            "FIELD_INP3"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、on_tick関数が完成しました。実行すると、りんごだけが下に動きます。"
                }
            ],
            []
        ],
        "variable": 7,
        "category": 10,
        "block": 0,
        "id": 15,
        "target": [
            8,
            "FIELD_INP4"
        ]
    }
];

text[28] = "on_key関数";
introlst[28] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、on_key関数が返す世界を作ります。この世界は、鳥の座標以外はもとの世界を同じですが、鳥の座標だけが更新されるようにします。"
                },
                {
                    "intro": "返すものはworld_t型の世界なのでworld_tをドラッグしてon_tick関数の2つ目のコネクタにつなぎます。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "bird以外のフィールドは変わらないので、各フィールドにそれぞれay、by、my、scoreをつなげます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 7,
        "target": [
            1,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 8,
        "target": [
            7,
            "FIELD_INP0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 3,
        "category": 10,
        "block": 0,
        "id": 9,
        "target": [
            7,
            "FIELD_INP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 4,
        "category": 10,
        "block": 0,
        "id": 10,
        "target": [
            7,
            "FIELD_INP2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "鳥の座標は右に10動かすようにしましょう。birdフィールドのコネクタに四則演算ブロックをつなぎます。"
                }
            ],
            []
        ],
        "variable": 6,
        "category": 10,
        "block": 0,
        "id": 11,
        "target": [
            7,
            "FIELD_INP4"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "鳥のx座標はx+10なので、xをドラッグして足し算ブロックの左側につなげます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 12,
        "target": [
            7,
            "FIELD_INP3"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "足し算ブロックの右側には数字の10を入れましょう。"
                }
            ],
            []
        ],
        "variable": 5,
        "category": 10,
        "block": 0,
        "id": 13,
        "target": [
            12,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで、on_key関数が完成しました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 14,
        "target": [
            12,
            "B"
        ],
        "value": [
            "10",
            "10"
        ]
    }
];

text[29] = "条件文";
introlst[29] = [
    {
        "text": [
            [
                {
                    "intro": "on_key関数を、キーボードの右矢印キーを押したら鳥が右に動き、それ以外のボタンでは動かないようにしましょう。"
                },
                {
                    "intro": "返すものはworld_t型の世界なのでworld_tをドラッグしてon_tick関数の2つ目のコネクタにつなぎます。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "bird以外のフィールドは変わらないので、各フィールドにそれぞれay、by、my、scoreをつなげます。\n"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 8,
        "target": [
            1,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 2,
        "category": 10,
        "block": 0,
        "id": 9,
        "target": [
            8,
            "FIELD_INP0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 3,
        "category": 10,
        "block": 0,
        "id": 10,
        "target": [
            8,
            "FIELD_INP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 4,
        "category": 10,
        "block": 0,
        "id": 11,
        "target": [
            8,
            "FIELD_INP2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "鳥の座標はkeyが”right”の場合だけ動かします。場合分けが必要なため、ifブロックを使います。if ブロックは「論理演算と条件文」メニューにあります。"
                }
            ],
            []
        ],
        "variable": 6,
        "category": 10,
        "block": 0,
        "id": 12,
        "target": [
            8,
            "FIELD_INP4"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "Ifブロックをbirdフィールドのコネクタにつなげます。"
                }
            ],
            [],
            [
                {
                    "intro": "場合分けの条件はkey=“right”です。「論理演算と条件文」メニューにある比較演算ブロックをifブロックの1つ目のコネクタにつなげます。"
                }
            ],
            []
        ],
        "category": 2,
        "block": 3,
        "id": 13,
        "target": [
            8,
            "FIELD_INP3"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "Keyをドラッグして=ブロックの左側につなげます。"
                }
            ],
            []
        ],
        "category": 2,
        "block": 0,
        "id": 14,
        "target": [
            13,
            "IF"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "=ブロックの右側には、文字列”right”を入れます。"
                }
            ],
            []
        ],
        "variable": 7,
        "category": 10,
        "block": 0,
        "id": 15,
        "target": [
            14,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "key=“right”が成り立つ場合は鳥を右に10動かします。ifブロックの2つ目ののコネクタに四則演算ブロックをつなぎます。"
                }
            ]
        ],
        "category": 1,
        "block": 0,
        "id": 16,
        "target": [
            14,
            "B"
        ],
        "value": [
            "right",
            "right"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "xをドラッグして足し算ブロックの左側につなげます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 17,
        "target": [
            13,
            "THEN"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "足し算ブロックの右側には数字の10を入れましょう。"
                }
            ],
            []
        ],
        "variable": 5,
        "category": 10,
        "block": 0,
        "id": 18,
        "target": [
            17,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "条件が成り立たない場合はもとのx座標をそのまま返します。xをドラッグしてifブロックの3つ目ののコネクタにつなぎます。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 19,
        "target": [
            17,
            "B"
        ],
        "value": [
            "10",
            "10"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで右矢印キーを押した時だけ鳥が動くようになりました。実行して確認してみましょう。"
                }
            ],
            []
        ],
        "variable": 5,
        "category": 10,
        "block": 0,
        "id": 20,
        "target": [
            13,
            "ELSE"
        ]
    }
];

text[30] = "複数条件の条件文";
introlst[30] = [
    {
        "text": [
            [
                {
                    "intro": "鳥を右だけでなく左にも動かせるように変更しましょう。on_key関数を、右矢印キーを押したら鳥が右に、左矢印キーを押したら左に動き、それ以外のボタンでは動かないようにしましょう。"
                },
                {
                    "intro": "Keyが”right”の場合、keyが”left”の場合と、場合分けが複数に増えました。場合分けを分岐させるにはifブロックの歯車ボタンを使います。"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "if ブロックのコネクタが増えて、 複数回の条件分岐を行うことができるようになりました。"
                }
            ],
            [
                {
                    "intro": "else if then というブロックを 右側につけます。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            2
        ],
        "open": false,
        "newvalue": "1",
        "oldvalue": "0",
        "add": true
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "key=”left”が成り立つ場合は鳥を左に10動かします。ifブロックの3番目ののコネクタはkey=”left”にしましょう。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            2,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 2,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "ELSEIF0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 4,
        "target": [
            3,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "ifブロックの4番目ののコネクタはx-10にしましょう。"
                }
            ]
        ],
        "category": 1,
        "block": 0,
        "id": 5,
        "target": [
            3,
            "B"
        ],
        "value": [
            "left",
            "left"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 6,
        "target": [
            2,
            "THEN0"
        ],
        "value": [
            "-",
            "MINUS_INT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 7,
        "target": [
            6,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで鳥が左にも動くようになりました。実行して鳥を動かしましょう。"
                }
	    ]
        ],
        "category": 0,
        "block": 0,
        "id": 8,
        "target": [
            6,
            "B"
        ],
        "value": [
            "10",
            "10"
        ]
    }
];

text[31] = "真偽値";
introlst[31] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、フルーツのy座標を受け取ったら、y座標が455以上かを判定する関数checkを作りましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [
                {
                    "intro": "関数名をcheckに変更しましょう。"
                }
            ],
            [],
            []
        ],
        "category": 9,
        "block": 1,
        "id": 0
    },
    {
        "text": [
            [
                {
                    "intro": "変数のブロックを let ブロックの最初のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 0,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "check"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "引数名をyに変更しましょう。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "返す値はy ≧ 455です。比較演算ブロックを関数ブロックの2つ目のコネクタにつなげます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 1,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "y"
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "比較演算ブロックの=部分をクリックして≧に変更します。"
                }
            ],
            [
                {
                    "intro": "yをドラッグして≧ブロックの左側につなぎます。"
                }
            ]
        ],
        "category": 2,
        "block": 0,
        "id": 2,
        "target": [
            0,
            "EXP1"
        ],
        "value": [
            "≥",
            "GTE"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "≧ブロックの右側は数字の455にします。"
                }
            ],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで関数checkが完成しました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 4,
        "target": [
            2,
            "B"
        ],
        "value": [
            "455",
            "455"
        ]
    }
];

text[32] = "かつ、または";
introlst[32] = [
    {
        "text": [
            [
                {
                    "intro": "関数checkを、受け取った座標が455以上かつ465以下かを判定する関数にしましょう。「かつ」を表す&&ブロックは「論理演算と条件文」メニューにあります。\n"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "論理演算ブロックをcheckのブロックの2つ目のコネクタにつなげます。"
                }
            ],
            [],
            [
                {
                    "intro": "返す値はy ≧ 455 && y ≦465です。&&ブロックの左側はy ≧ 455にしましょう。"
                }
            ],
            []
        ],
        "category": 2,
        "block": 1,
        "id": 2,
        "target": [
            0,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 2,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "PARAM0"
        ],
        "value": [
            "≥",
            "GTE"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 4,
        "target": [
            3,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "&&ブロックの右側はy≦465にしましょう。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 5,
        "target": [
            3,
            "B"
        ],
        "value": [
            "455",
            "455"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 2,
        "block": 0,
        "id": 6,
        "target": [
            2,
            "PARAM1"
        ],
        "value": [
            "≤",
            "LTE"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 7,
        "target": [
            6,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "これで関数checkが完成しました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 8,
        "target": [
            6,
            "B"
        ],
        "value": [
            "465",
            "465"
        ]
    }
];

text[33] = "複数のかつ、または";
introlst[33] = [
    {
        "text": [
            [
                {
                    "intro": "world_t型のレコードを受け取って、いずれかのフルーツのy座標が455以上465以下になっていたら、得点に10を足した点数を、そうでなければ得点をそのまま返す関数add_scoreを作りましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 9,
        "block": 1,
        "id": 1,
        "target": [
            0,
            "NEXT"
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "add_scoreの引数はworld_t型のレコードにします。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 1,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "add_score"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            1,
            5,
            1,
            1,
            1,
            1,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 7,
        "target": [
            1,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            1,
            -1
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 3,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "ay"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 4,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "by"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 5,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "my"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "id": 6,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "x"
    },
    {
        "text": [
            [
                {
                    "intro": "条件が成り立っているかによって得点を増やすかどうかが変わります。ifブロックを使って場合分けをしましょう。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 7,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "score"
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "どれか1つのフルーツが条件を満たしていたら得点を増やすので、または（||）ブロックを使います。"
                }
            ],
            []
        ],
        "category": 2,
        "block": 3,
        "id": 8,
        "target": [
            1,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "フルーツはりんご、バナナ、メロンの3種類あります。そのため、またはでつなげる式も3つです。歯車ボタンでまたはの数を増やしましょう。\n"
                }
            ]
        ],
        "category": 2,
        "block": 1,
        "id": 9,
        "target": [
            8,
            "IF"
        ],
        "value": [
            "||",
            "OR"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            9
        ],
        "open": false,
        "newvalue": "3",
        "oldvalue": "2",
        "add": true
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "これで、3つの式のまたはをとることができるようになりました。\n"
                },
                {
                    "intro": "まずはりんごが455以上465以下になっているかを調べます。これは、前のチュートリアルで作ったcheck関数にりんごのy座標を渡すことで調べることができます。"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            9,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 10,
        "target": [
            9,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "同じようにバナナ、メロンもcheck関数を使って調べます。"
                }
            ],
            []
        ],
        "variable": 3,
        "category": 10,
        "block": 0,
        "id": 11,
        "target": [
            10,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 12,
        "target": [
            9,
            "PARAM1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 4,
        "category": 10,
        "block": 0,
        "id": 13,
        "target": [
            12,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 14,
        "target": [
            9,
            "PARAM2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "条件が成り立っていた場合は得点を10増やして、score+10を返します。"
                }
            ],
            []
        ],
        "variable": 5,
        "category": 10,
        "block": 0,
        "id": 15,
        "target": [
            14,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 16,
        "target": [
            8,
            "THEN"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 7,
        "category": 10,
        "block": 0,
        "id": 17,
        "target": [
            16,
            "A"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "成り立っていなかった場合はscoreをそのまま返します。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 18,
        "target": [
            16,
            "B"
        ],
        "value": [
            "10",
            "10"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、フルーツのy座標が455以上465以下になっていたら得点を増やす関数を作ることができました。"
                }
            ],
            []
        ],
        "variable": 7,
        "category": 10,
        "block": 0,
        "id": 19,
        "target": [
            8,
            "ELSE"
        ]
    }
];

text[34] = "複数の画像";
introlst[34] = [
    {
        "text": [
            [
                {
                    "intro": "複数の画像を描画してみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "まずは四角の画像を (50, 50) に置きましょう。"
                }
            ],
            []
        ],
        "category": 5,
        "block": 1,
        "id": 3,
        "target": [
            2,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 4,
        "block": 3,
        "id": 4,
        "target": [
            3,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 7,
        "block": 0,
        "id": 8,
        "target": [
            3,
            "PARAM1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 9,
        "target": [
            8,
            "FIRST"
        ],
        "value": [
            "50",
            "50"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "place_imageブロックを入れ子にすると、画像を重ねることができます。その場合、左のplace_imageブロックにつながっている画像が前面に描画されます。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 10,
        "target": [
            8,
            "SECOND"
        ],
        "value": [
            "50",
            "50"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "四角の画像の下にそらの画像を (100, 80) に置きましょう。"
                }
            ],
            []
        ],
        "category": 5,
        "block": 1,
        "id": 11,
        "target": [
            3,
            "PARAM2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 4,
        "block": 2,
        "id": 12,
        "target": [
            11,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 7,
        "block": 0,
        "id": 16,
        "target": [
            11,
            "PARAM1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 17,
        "target": [
            16,
            "FIRST"
        ],
        "value": [
            "100",
            "100"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "一番下はempty_sceneです。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 18,
        "target": [
            16,
            "SECOND"
        ],
        "value": [
            "80",
            "80"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 5,
        "block": 0,
        "id": 19,
        "target": [
            11,
            "PARAM2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 20,
        "target": [
            19,
            "PARAM0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、複数の画像を重ねて描画できました。実行してみましょう。"
                }
            ],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 21,
        "target": [
            19,
            "PARAM1"
        ]
    }
];

var step = 0;
Tutorial.intro = introJs();

var lst;
var a;
var menulst;
var blocklst;
var idlst = [];
var initidlst = [];
var f;
var alertflg = 0;
var bubbleflg = 0;
var cnfmflg = true;
var number;

var box = document.createElement("div");
var box2 = document.createElement("div");
var box3 = document.createElement("div");
var box4 = document.createElement("div");
var box5 = document.createElement("div");
var box6 = document.createElement("div");
var box7 = document.createElement("div");
var box8 = document.createElement("div");

function draw_rect(rec) {
    rect = rec.getBoundingClientRect();
    box.setAttribute("style", "width:" + (rect.width+10) + "px; height:5px; left:" + (rect.left-5) + "px; top:" + (rect.top-5) + "px; background:red;");
    box2.setAttribute("style", "width:" + (rect.width+15) + "px; height:5px; left:" + (rect.left-5) + "px; top:" + (rect.bottom+5) + "px; background:red;");
    box3.setAttribute("style", "width:5px; height:" + (rect.height+10) + "px; left:" + (rect.left-5) + "px; top:" + (rect.top-5) + "px; background:red;");
    box4.setAttribute("style", "width:5px; height:" + (rect.height+15) + "px; left:" + (rect.right+5) + "px; top:" + (rect.top-5) + "px; background:red;");
	box.setAttribute("class", "tutorialBox");
	box2.setAttribute("class", "tutorialBox");
	box3.setAttribute("class", "tutorialBox");
	box4.setAttribute("class", "tutorialBox");
	document.querySelector("body").appendChild(box);
	document.querySelector("body").appendChild(box2);
	document.querySelector("body").appendChild(box3);
	document.querySelector("body").appendChild(box4);
}

function draw_rect2(x, y, width, height, scl=false) {
    if (scl) {
	scale = 1;
	scrollx = 0;
	scrolly = 0;
    }
    else {
	scale = Blockly.mainWorkspace.scale;
	scrollx = Blockly.mainWorkspace.scrollX;
	scrolly = Blockly.mainWorkspace.scrollY;
    }
    x2 = Blockly.mainWorkspace.toolbox_.width + scrollx + (x - 10) * scale;
    box5.setAttribute("style", "width:" + ((width+10)*scale) + "px; height:5px; left:" + x2 + "px; top:" + ((y-5)*scale+scrolly) + "px; background:LightSkyBlue;");
    box6.setAttribute("style", "width:" + ((width+10)*scale+5) + "px; height:5px; left:" + x2 + "px; top:" + ((y+height+5)*scale+scrolly) + "px; background:LightSkyBlue;");
    box7.setAttribute("style", "width:5px; height:" + ((height+10)*scale) + "px; left:" + x2 + "px; top:" + ((y-5)*scale+scrolly) + "px; background:LightSkyBlue;");
    box8.setAttribute("style", "width:5px; height:" + ((height+10)*scale+5) + "px; left:" + (x2+(width+10)*scale) + "px; top:" + ((y-5)*scale+scrolly) + "px; background:LightSkyBlue;");
    box5.setAttribute("class", "tutorialBox");
    box6.setAttribute("class", "tutorialBox");
    box7.setAttribute("class", "tutorialBox");
    box8.setAttribute("class", "tutorialBox");
    document.querySelector("body").appendChild(box5);
    document.querySelector("body").appendChild(box6);
    document.querySelector("body").appendChild(box7);
    document.querySelector("body").appendChild(box8);
}

function dark() {
    rect = document.body.getBoundingClientRect();
    div = document.createElement("div");
    div.setAttribute("style", "width:" + rect.width + "px; height:" + rect.height + "px; left:" + rect.left + "px; top:" +rect.top + "px; background:Black; opacity: 0.4");
    div.setAttribute("class", "tutorialBox");
    document.body.appendChild(div);
}

function clear_rect() {
    while ((div = document.querySelector("div[class='tutorialBox']")) != null) {
	document.querySelector("body").removeChild(div);
    }
}

menulst = ["四則演算", "文字列", "論理演算と条件文", "色", "画像", "風景", "リスト", "座標と世界の定義", "ゲーム用の定義", "一般の変数と関数"];

blocklst = [[["int_typed", "整数", "INT"],
	     ["int_arithmetic_typed", "四則演算", "OP_INT"],
	     ["int_abs_typed", "abs"],
	     ["random_int_typed", "乱数"]],
	    [["string_typed", "文字列", "STRING"],
	     ["concat_string_typed", "文字列結合"],
	     ["string_of_int_typed", "string_of_int"]],
	    [["logic_compare_typed", "比較演算", "OP"],
	     ["logic_operator_typed", "論理演算", "OP_BOOL"],
	     ["not_operator_typed", "not"],
	     ["logic_ternary_typed", "if"],
	     ["logic_boolean_typed", "true", "BOOL"]],
	    [["color_typed", "color", "COLOR"],
	     ["make_color_typed", "make_color"],
	     ["make_color2_typed", "make_color2"]],
	    [["image_width_typed", "image_width"],
	     ["image_height_typed", "image_height"],
	     ["read_image_typed", "read_image"],
	     ["rectangle_typed", "rectangle", "IMAGE"],
	     ["circle_typed", "circle", "IMAGE"],
	     ["line_typed", "line"],
	     ["polygon_typed", "polygon", "IMAGE"],
	     ["text_typed", "text"],
	     ["overlay_typed", "overlay"]],
	    [["empty_scene_typed", "empty_scene"],
	     ["place_image_typed", "place_image"],
	     ["place_images_typed", "place_images"]],
	    [["lists_create_with_typed", "リスト"],
	     ["list_cons_typed", "cons"],
	     ["list_map_typed", "map"],
	     ["andmap_typed", "andmap"],
	     ["ormap_typed", "ormap"],
	     ["sum_typed", "sum"],
	     ["list_filter_typed", "filter"]],
	    [["pair_create_typed", "組"],
	     ["defined_recordtype_typed", "world_t", "DATANAME", "FIELDn"],
	     ["defined_recordtype_typed", "レコード定義", "DATANAME", "FIELDn"]],

	    [["letstatement_typed", "initial_world", "VAR"],
	     ["letstatement_typed", "width", "VAR"],
	     ["letstatement_typed", "height", "VAR"],
	     ["letstatement_fun_pattern_typed", "draw", "VAR"],
	     ["letstatement_fun_pattern_typed", "on_tick", "VAR"],
	     ["letstatement_fun_pattern_typed", "on_key", "VAR"],
	     ["letstatement_fun_pattern_typed", "on_mouse", "VAR"],
	     ["letstatement_typed", "rate", "VAR"],
	     ["big_bang_typed", "big_bang"]],
	    [["letstatement_fun_pattern_typed", "変数定義", "VAR"],
	     ["letstatement_fun_pattern_typed", "関数定義", "VAR"],
	     ["let_fun_pattern_typed", "局所変数定義", "VAR"],
	     ["let_fun_pattern_typed", "局所関数定義", "VAR"]],
	    [["variable_pattern_typed", "パラメータ", "VAR"],
	     ["pair_pattern_typed", "パラメータ", "VAR"],
	     ["record_pattern_typed", "パラメータ", "VAR"],
	     ["empty_construct_pattern_typed", "パラメータ", "VAR"],
	     ["cons_construct_pattern_typed", "パラメータ", "VAR"],
	     ["option_none_pattern_typed", "パラメータ", "VAR"],
	     ["option_some_pattern_typed", "パラメータ", "VAR"],]];

var patternlst = [
    "variable_pattern_typed",
    "pair_pattern_typed",
    "record_pattern_typed",
    "empty_construct_pattern_typed",
    "cons_construct_pattern_typed",
    "option_none_pattern_typed",
    "option_some_pattern_typed",
];

Tutorial.clear = function() {
    cnfmflg = false;
    Tutorial.intro.addSteps([{intro: "チュートリアルクリア"}]).onchange(function(){}).start();
    Typed.server_log('t_log', 'clear t' + number);
}

Tutorial.error = function() {
    alert("エラー！最初からやり直してください");
    Blockly.mainWorkspace.clear();
    alertflg = 0;
    Tutorial.main(false);
}

Tutorial.cancel = function(e, f, g) {
    if (e.__proto__.type == "change" && e.element == "field") {
	b = lst.filter(function(x){return x.id == idlst.indexOf(e.blockId)})[0];
	if (b.value == undefined) {
	    value = Blockly.FieldTextInput.htmlInput_.defaultValue;
	}
	else value = b.value[1];
	if (e.newValue == value) {
	    alertflg = 0;
	}
	else if (alertflg == 0) {
	    console.log(e);
	    alertflg = 1;
	    cnfmflg = false;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    window.setTimeout('alert("操作が違います！")', 11);
	    Blockly.selected.unselect();
	    Blockly.mainWorkspace.getBlockById(e.blockId).getField(blocklst[b.category][b.block][2]).setValue(value);
	    Blockly.FieldTextInput.htmlInput_.value = value;
	    Tutorial.intro.setOptions({'steps': []});
	    g();
	}
	else {
	}
    }
    else if (e.__proto__.type == "create" || e.__proto__.type == "delete" || ((e.__proto__.type == "move" && (e.newParentId != undefined || e.oldParentId != undefined)) || (e.__proto__.type == "change" && e.element != "collapsed") || e.__proto__.type == "bound_var_rename")) {
	if (alertflg == 1) {
	    console.log("1->0");
	    alertflg = 0;
	}
	else {/*
	    console.log("0->1");*/
	    alertflg = 1;
	    console.log(e);
	    cnfmflg = false;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    window.setTimeout('alert("操作が違います！")', 11);
	    Blockly.mainWorkspace.undo();
	    Tutorial.intro.setOptions({'steps': []});
	    if (e.__proto__.type != "create" && Blockly.mainWorkspace.getBlockById(e.blockId) == null) {
		window.setTimeout(Tutorial.error, 11);
	    }
	    else {
		g();
	    }
	}
    }
}

function ondrag(x, y, s, g, n, sy=null, bar=null) {
    if (dragflg != n) {
    }
    else if (x - Blockly.mainWorkspace.scrollX < 0.0001 &&
	     y - Blockly.mainWorkspace.scrollY < 0.0001 &&
	     x - Blockly.mainWorkspace.scrollX > -0.0001 &&
	     y - Blockly.mainWorkspace.scrollY > -0.0001 &&
	     s == Blockly.mainWorkspace.scale &&
	     (sy == null || sy == bar.handlePosition_)) {
	window.setTimeout(function(){ondrag(x, y, s, g, n, sy, bar);}, 1000);
    }
    else {
	cnfmflg = false;
	Tutorial.intro.exit();
	Blockly.mainWorkspace.removeChangeListener(f);
	Tutorial.intro.setOptions({'steps': []});
	g();
    }
}

function isoverlapping (a1, a2, b1, b2) {
    bool =  ((a1 < b1) && (a2 > b1)) || ((a1 > b1) && (a1 < b2));
    //console.log(a1+","+a2+","+b1+","+b2);
    //console.log(bool);
    return bool;
}

function bubble(n, r1=null, r2x=0, r2y=0, r2w=0, r2h=0, bflg = 0) {
    //console.log(n);
    if (bflg == bubbleflg/*true*/) {
	if (n == 0) {
	    setTimeout(function(){bubble(1, r1, r2x, r2y, r2w, r2h, 1);},500);
	    bubbleflg = 1;
	}
	else if (layer=document.querySelector(".introjs-tooltipReferenceLayer")) {
	    ///console.log("!");
	    r = layer.firstElementChild.getBoundingClientRect();
	    //console.log(layer);
	    //console.log(r);
	    rt = r.top;
	    rb = r.bottom;
	    rl = r.left;
	    rr = r.right;
	    rect1 = r1.getBoundingClientRect();
	    if (r1) {
		bool1 = isoverlapping(rect1.top, rect1.bottom, rt, rb);
		bool2 = isoverlapping(rect1.left, rect1.right, rl, rr);
	    }
	    else {
		bool1 = false;
		bool2 = false;
	    }
	    bool3 = isoverlapping(r2y, r2y+r2h, rt, rb);
	    bool4 = isoverlapping(r2x, r2x+r2w, rl, rr);
	    if (n == 1) {
		position = 'bottom';
	    }
	    else if (n == 2) {
		position = 'top';
	    }
	    else if (n == 3) {
		position = 'right';
	    }
	    else if (n == 4) {
		position = 'left';
	    }
	    if ((bool1 && bool2) || (bool3 && bool4)/* || n == 0*/) {
		if (n < 5) {
		    stp = Tutorial.intro._currentStep;
		    steps = Tutorial.intro._options.steps.slice(-1);
		    cnfmflg = false;
		    Tutorial.intro.exit();
		    if (Blockly.mainWorkspace.listeners_.length == 0/* && dragflg == 2*/) {
			Blockly.mainWorkspace.addChangeListener(f);
			//console.log(Blockly.mainWorkspace.listeners_);
		    }
		    Tutorial.intro.setOptions({'tooltipPosition': position, 'steps': steps});
		    Tutorial.intro.start();
		    bubble(n+1, r1, r2x, r2y, r2w, r2h, 1);
		    //console.log(n);
		}
	    }
	}
    }
}

Tutorial.f = function(l) {
    idlst = initidlst;
    step = 0;
    lst = l;
    if (lst.length > 0 && lst[0].text.length == 1) {
	Tutorial.intro.setOptions({'steps': lst[0].text[0].slice()});
	step++;
    }
    else {
	Tutorial.intro.setOptions({'steps': []});
    }
    Tutorial.f0();
}

Tutorial.f0 = function() {
    console.log("f0");
    if (a = lst[step]) {
	if (a.trash != undefined) {
	    Tutorial.f9();
	}
	else if (a.variable == undefined && a.workbench == undefined && a.mutator == undefined) {
	    if (a.skip) {
		Tutorial.f4();
	    }
	    else if (a.skip2) {
		Tutorial.f3();
	    }
	    else {
		Tutorial.f1();
	    }
	}
	else {
	    Tutorial.f6();
	}
    }
    else {
	Tutorial.clear();
    }
}

Tutorial.f1 = function() {
    console.log("f1");
    x = a.category;
    if (x < 9) {
	x2 = x+1;
    }
    else {
	x2 = "a";
    }
    target = document.querySelector("div[aria-labelledby=':"+(x2)+".label']");
    if (a.bubble)
	t = a.bubble[0];
    else
	t = "";
    Tutorial.intro.addSteps([{element: target, intro: t+menulst[x]+"をクリック"}]).onchange(function(e){if(e!=target){dark();}else{clear_rect();draw_rect(target);}}).start();
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if(e.element == "category" && e.newValue == menulst[x]) {
	    cnfmflg = false;
	    Tutorial.intro.exit();
	    Tutorial.intro.onchange(function(e1){console.log(e1)});
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[1].slice()});
	    Tutorial.f2();
	}
    });
}

Tutorial.f2 = function(mousedown = 0) {
    console.log("f2");
    console.log(mousedown);
    x = a.category;
    y = a.block;
    target = Blockly.mainWorkspace.toolbox_.flyout_.mats_[y];/*
    if (target.getAttribute("y") > Blockly.mainWorkspace.toolbox_.flyout_.height_) {
	Blockly.mainWorkspace.toolbox_.flyout_.scrollbar_.set((+target.getAttribute("y")) + (+target.getAttribute("height")) - Blockly.mainWorkspace.toolbox_.flyout_.height_)
	}*/
    Blockly.mainWorkspace.toolbox_.flyout_.scrollbar_.set(target.getAttribute("y"));
    dragflg = 8;
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f2, 8, Blockly.mainWorkspace.toolbox_.flyout_.scrollbar_.handlePosition_, Blockly.mainWorkspace.toolbox_.flyout_.scrollbar_);
    if (!mousedown) {
	if (a.bubble)
	    t = a.bubble[1];
	else
	    t = "";
	Tutorial.intro.addSteps([{element: target, intro: t+blocklst[x][y][1]+"ブロックをメインスペースにドラッグ"}]).onchange(function(e){if(e!=target){dark();}else{clear_rect();draw_rect(target);}}).start();
    }
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "create" && Blockly.mainWorkspace.getBlockById(e.blockId).type == blocklst[x][y][0]){
	    b = Blockly.mainWorkspace.getBlockById(e.blockId);
	    if (x == 9) {
		judge = (y%2 == 0 && b.getInput("ARG0") == null) || (y%2 == 1 && b.getInput("ARG0") != null);
	    }
	    else if (blocklst[x][y][0] == "letstatement_typed" || b.type == "letstatement_fun_pattern_typed") {
		judge = blocklst[x][y][1] == e.xml.innerText;
	    }
	    else if (blocklst[x][y][0] == "defined_recordtype_typed") {
		judge = ((y == 1) == e.xml.innerText.startsWith("world_t"));
	    }
	    else
		judge = true;
	    if (judge) {
		dragflg = 0;
		console.log(e.ids[0]);
		idlst = idlst.concat(e.ids);
		cnfmflg = false;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		if (a.target) {
		    Tutorial.intro.setOptions({'steps': a.text[2].slice()});
		    Tutorial.f3();
		}
		else {
		    Tutorial.f2(1);
		}
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, Tutorial.f2);
	    }
	}
	else if (e.__proto__.type == "ui" && !mousedown) {
	    dragflg = 0;
	    cnfmflg = false;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f1();
	}
	else if (mousedown > 0 && e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined && idlst[a.id] == e.blockId) {
	    if (mousedown == 2) {
		dragflg = 0;
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.f2(1);
	    }
	    else {
		dragflg = 0;
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[2].slice()});
		Tutorial.f3();
	    }
	}
	else if (mousedown == 1 && e.__proto__.type == "ui" && e.element == "selected" && e.newValue == idlst[a.id]) {
	    dragflg = 0;
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.f2(2);
	}
	else {
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, Tutorial.f2);
	}
    });
}

Tutorial.f3 = function(exception = 0) {
    console.log("f3"+exception);
    if (a.target) {
	dragflg = 1;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f3, 1);
	target = Blockly.mainWorkspace.getBlockById(idlst[a.target[0]]);
	bubbleflg = 0;
	if (!exception) {
	    if (a.bubble)
		t = a.bubble[2];
	    else
		t = "";
	    if (a.target[1] == "NEXT") {
		Tutorial.intro.addSteps([{element: target.svgGroup_, intro: t+'ブロックをドラッグしてはめる'}]).onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();input = target.nextConnection;draw_rect2(input.x_-15, input.y_, 24, 0);bubble(0, Blockly.mainWorkspace.getBlockById(idlst[a.id]).svgGroup_, input.x_-15*Blockly.mainWorkspace.scale+Blockly.mainWorkspace.scrollX, input.y_*Blockly.mainWorkspace.scale+Blockly.mainWorkspace.scrollY, 24, 24);}}).start();
	    }
	    else {
		Tutorial.intro.addSteps([{element: target.svgGroup_, intro: t+'ブロックをドラッグしてはめる'}]).onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();input = target.getInput(a.target[1]);draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);bubble(0, Blockly.mainWorkspace.getBlockById(idlst[a.id]).svgGroup_, input.connection.x_*Blockly.mainWorkspace.scale+Blockly.mainWorkspace.scrollX, input.connection.y_*Blockly.mainWorkspace.scale+Blockly.mainWorkspace.scrollY, input.renderWidth+10, input.renderHeight);}}).start();
	    }

	}
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    block = Blockly.mainWorkspace.getBlockById(e.blockId);
	    if (exception == 1 && e.__proto__.type == "move" && block.type == blocklst[a.category][a.block][0] && e.newParentId == target.id && (e.newInputName == a.target[1] || (a.target[1] == "NEXT" && e.newInputName == undefined))) {
		dragflg = 0;
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.f3(2);
	    }
	    else if (e.__proto__.type == "move" && (block.type == blocklst[a.category][a.block][0] && e.newParentId == target.id && (e.newInputName == a.target[1] || (a.target[1] == "NEXT" && e.newInputName == undefined))) || (exception == 2 && e.newParentId == undefined && e.oldParentId == undefined)) {
		dragflg = 0;
		cnfmflg = false;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[3].slice()});
		Tutorial.f4();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		cnfmflg = false;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		console.log(e);
		Tutorial.f3();
	    }
	    else if (e.__proto__.type == "move" && (a.target[1] == "NEXT" || (a.category == 5 && a.block == 1)) && e.oldParentId == target.id) {
		dragflg = 0;
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.f3(1);
	    }
	    else {
		dragflg = 0;/*
		Tutorial.intro.setOptions({'steps': []});*/
		Tutorial.cancel(e, f, Tutorial.f3);
	    }
	});
    }
    else {
	Tutorial.f4();
    }
}

Tutorial.f4 = function() {
    console.log("f4");
    if (a.value) {
	dragflg = 2;
	block = Blockly.mainWorkspace.getBlockById(idlst[a.id]);
	field = block.getField(blocklst[a.category][a.block][2]);
	if (a.bubble)
	    t = a.bubble[3];
	else
	    t = "";
	Tutorial.intro.addSteps([{element: field.fieldGroup_, intro: t+a.value[0]+'に変更'}]).onchange(function(e){if(e!=field.fieldGroup_){dark();}else{clear_rect();draw_rect(field.fieldGroup_);}}).start();
	var observer = new MutationObserver(function() {
	    if (Blockly.WidgetDiv.owner_ && Blockly.WidgetDiv.owner_.sourceBlock_.id == idlst[a.id]) {
		widget = document.querySelector(".blocklyWidgetDiv").firstElementChild.getBoundingClientRect();
		bubbleflg = 0;
		bubble(0, field.fieldGroup_, widget.left, widget.top, widget.width, widget.height);
	    }
	});
	const config = {
	    attributes: true,
	    childList: true,
	    characterData: true,
	    attributeFilter: ['display']
	}
	observer.observe(document.querySelector(".blocklyWidgetDiv"), config);
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, function(){observer.disconnect();Tutorial.f4()}, 2);
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.__proto__.type == "change" && e.newValue == a.value[1]) {
		dragflg = 0;
		cnfmflg = false;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[4].slice()});
		observer.disconnect();
		Tutorial.f5();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		cnfmflg = false;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		observer.disconnect();
		Tutorial.f4();
	    }
	    else if (e.__proto__.type == "change" && e.element == "field" && e.blockId == idlst[a.id]) {
	    }
	    else if (e.__proto__.type == "ui" && e.element == "selected") {
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, function(){observer.disconnect();Tutorial.f4()});
	    }
	});
    }
    else {
	Tutorial.f5();
    }
}

Tutorial.f5 = function() {
    console.log("f5");
    if (a.name != undefined) {
	dragflg = 3;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f5, 3);
	block = Blockly.mainWorkspace.getBlockById(idlst[a.id]);
	if (!(fieldname = a.namefield)) {
	    fieldname = blocklst[a.category][a.block][2];
	}
	field = block.getField(fieldname);
	if (a.bubble)
	    t = a.bubble[4];
	else
	    t = "";
	Tutorial.intro.addSteps([{element: field.fieldGroup_, intro: t+'名前を'+a.name+'に変更', position: 'top'}]).onchange(function(e){if(e!=field.fieldGroup_){dark();}else{clear_rect();draw_rect(field.fieldGroup_);}}).start();
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.__proto__.type == "bound_var_rename" && field.getText() == a.name) {
		dragflg = 0;
		cnfmflg = false;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[0].slice()});
		step++;
		Tutorial.f0();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		cnfmflg = false;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.f5();
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, Tutorial.f5);
	    }
	});

    }
    else {
	step++;
	Tutorial.f0();
    }
}

Tutorial.f6 = function() {
    if (a.open != true) {
	if ((a.workbench || a.mutator != undefined) && a.workbenchopen != true) {
	    dragflg = 4;
	    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f6, 4);
	    if (a.bubble)
		t = a.bubble[5];
	    else
		t = "";
	    if (a.workbench) {
		block = Blockly.mainWorkspace.getBlockById(idlst[a.workbench[0]]);
		if (block.type == "defined_recordtype_typed") {
		    icon = block.workbenches[0].iconGroup_;
		    str = "「型」";
		}
		else {
		    icon = block.workbenches[1].iconGroup_;
		    str = "「パ」";
		}
		el = "workbenchOpen";
		next = function(){Tutorial.f7(null);};
	    }
	    else {
		block = Blockly.mainWorkspace.getBlockById(idlst[a.mutator[0]]);
		icon = block.mutator.iconGroup_;
		str = "歯車";
		el = "mutatorOpen";
		next = Tutorial.f8;
	    }
	    if ((a.workbench && a.workbench[1] == -1) || (a.mutator && a.mutator[1] == false)) {
		txt = t+str+"ボタンを押してメニューを閉じる";
		next = function(){step++; Tutorial.f0();};
	    }
	    else {
		txt = str+'ボタンをクリック'
	    }
	    Tutorial.intro.addSteps([{element: icon, intro: txt}]).onchange(function(e){if(e!=icon){dark();}else{clear_rect();draw_rect(icon);}}).start();
	    Blockly.mainWorkspace.addChangeListener(f = function(e){
		if (e.element == el && e.blockId == block.id) {
		    dragflg = 0;
		    cnfmflg = false;
		    Tutorial.intro.exit();
		    clear_rect();
		    Blockly.mainWorkspace.removeChangeListener(f);
		    Tutorial.intro.setOptions({'steps': a.text[1].slice()});
		    next();
		}
		else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		    dragflg = 0;
		    cnfmflg = false;
		    Tutorial.intro.exit();
		    clear_rect();
		    Blockly.mainWorkspace.removeChangeListener(f);
		    Tutorial.intro.setOptions({'steps': []});
		    Tutorial.f6();
		}
		else {
		    dragflg = 0;
		    Tutorial.intro.setOptions({'steps': []});
		    Tutorial.cancel(e, f, Tutorial.f6);
		}
	    });
	}
	else {
	    Tutorial.f7(null);
	}
    }
    else {
	Tutorial.f8();
    }
}

Tutorial.f7 = function(arg) {
    dragflg = 5;
    target = Blockly.mainWorkspace.getBlockById(idlst[a.target[0]]);
    input = target.getInput(a.target[1]);
    if (a.variable == undefined) {
	if ((b=Blockly.mainWorkspace.getBlockById(idlst[a.workbench[0]])).type == "defined_recordtype_typed") {
	    flyout = b.workbenches[0].workspace_.flyout_;
	}
	else {
	    flyout = b.workbenches[1].workspace_.flyout_;
	}
	block = flyout.mats_[a.workbench[1]];
	flyout.scrollbar_.set(block.getAttribute("y"));
	scroll = flyout.scrollbar_;
	scrolly = scroll.handlePosition_;
    }
    else {
	if (Blockly.mainWorkspace.getBlockById(idlst[a.variable]).type == "defined_recordtype_typed") {
	    field = "DATANAME";
	}
	else {
	    field = "VAR";
	}
	scroll = null;
	scrolly = null;
	block = Blockly.mainWorkspace.getBlockById(idlst[a.variable]).getField(field).fieldGroup_;
    }
    if (a.bubble)
	t = a.bubble[6];
    else
	t = "";
    if (a.alt) {
	alt = "オプションキーを押しながら";
    }
    else alt = "";
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, function(){Tutorial.f7(arg)}, 5, scrolly, scroll);
    bubbleflg = 0;
    Tutorial.intro.onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();draw_rect(block);draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);bubble(0, block, input.connection.x_*Blockly.mainWorkspace.scale+Blockly.mainWorkspace.scrollX, input.connection.y_*Blockly.mainWorkspace.scale+Blockly.mainWorkspace.scrollY, input.renderWidth*Blockly.mainWorkspace.scale, input.renderHeight*Blockly.mainWorkspace.scale);}}).addSteps([{element: target.svgGroup_, intro: t+alt+'ドラッグしてブロックをはめる'}]).start();
    
    id = arg;
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "move" && (a.workbench != undefined || idlst[a.variable]) && e.blockId == id && e.newParentId == target.id && e.newInputName == a.target[1]) {
	    dragflg = 0;
	    cnfmflg = false;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[3].slice()});
	    if (a.workbench != undefined && a.name != undefined) {
		Tutorial.f5();
	    }
	    else {
		step++
		Tutorial.f0();
	    }
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
	    cnfmflg = false;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f7(id);
	}
	else if (e.__proto__.type == "change" && e.element == "inline" && ((a.variable != undefined && ((Blockly.mainWorkspace.getBlockById(e.blockId).type == "create_record_typed" && Blockly.mainWorkspace.getBlockById(e.blockId).typedStructureReference.RECORD.value_.sourceBlock_.id == idlst[a.variable]) || Blockly.mainWorkspace.getBlockById(e.blockId).typedReference.VAR.value_.sourceBlock_.id == idlst[a.variable]))|| (a.workbench != undefined && block.tooltip.type == Blockly.mainWorkspace.getBlockById(e.blockId).type))) {
	    id = e.blockId;
	    idlst.push(id);
	}
	else if (e.__proto__.type == "create" && a.workbench != undefined && b.type == "defined_recordtype_typed" && Blockly.mainWorkspace.getBlockById(e.blockId).type == block.tooltip.type) {
	    id = e.blockId;
	    idlst.push(id);
	}
	else if ((e.__proto__.type == "create" || e.__proto__.type == "change") && (e.blockId == id || (a.workbench != undefined && patternlst.indexOf(Blockly.mainWorkspace.getBlockById(e.blockId).type) != -1))) {
	}
	else if (e.__proto__.type == "move" && e.newParentId == id) {
	    idlst.push(e.blockId);
	}
	else if (e.element == "click") {
	}
	else {
	    dragflg = 0;/*
	    Tutorial.intro.setOptions({'steps': []});*/
	    Tutorial.cancel(e, f, function(){Tutorial.f7(null)});
	}
    });
}

Tutorial.f8 = function() {
    dragflg = 6;
    block = Blockly.mainWorkspace.getBlockById(idlst[a.mutator]);
    console.log(block);
    console.log(block.mutator);
    ws = block.mutator.workspace_;
    b = ws.getTopBlocks(true)[0];
    if (a.bigbang) {
	if (a.add > 0) {
	    max = a.add;
	}
	else {
	    max = 0;
	}
	n = block.mutator.quarkNames_.indexOf(a.item);
	el = block.mutator.workspace_.flyout_.mats_[n];
	if (el.getAttribute("y") > block.mutator.workspace_.flyout_.height_) {
	    block.mutator.workspace_.flyout_.scrollbar_.set((+el.getAttribute("y")) + (+el.getAttribute("height")) - block.mutator.workspace_.flyout_.height_);
	}
	scroll = block.mutator.workspace_.flyout_.scrollbar_;
	scrolly = scroll.handlePosition_;
	txt = "";
	txt2 = "";
    }
    else {
	max = a.oldvalue;
	el = block.mutator.workspace_.flyout_.mats_[0];
	txt = 'items=\"';
	txt2 = '\"';
	scroll = null;
	scrolly = null;
    }
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f8, 6, scrolly, scroll);
    for (var i=0; i<max; i++) {
	b = b.getChildren()[0];
    }
    if (a.bubble)
	t = a.bubble[7];
    else
	t = "";
    if (a.add) {
	if (max == 0) {
	    connection = b.inputList[1].connection;
	}
	else {
	    connection = b.nextConnection;
	}
	Tutorial.intro.addSteps([{element: ws.svgBackground_, intro: t+'ブロックをくっつける', position: 'bottom'}]).onchange(function(e){if(e!=ws.svgBackground_){dark();}else{clear_rect();draw_rect(el);draw_rect2(connection.x_+ws.workspaceArea_.left-Blockly.mainWorkspace.toolbox_.width-15, connection.y_+ws.workspaceArea_.top, 24, 0)}}).start();
    }
    else {
	if (a.bigbang) {
	    el = block.mutator.workspace_.typedBlocksDB_[a.item][0].svgPath_;
	}
	else {
	    for (var i=1; i<a.oldvalue-a.newvalue; i++) {
		b = b.getParent();
	    }
	    el = b.svgGroup_;
	}
	Tutorial.intro.addSteps([{element: el, intro: t+'ブロックを外す', position: 'top'}]).onchange(function(e){if(e!=el){dark();}else{clear_rect();draw_rect(el)}}).start();
    }
    if (a.newvalue == null) {
	newvalue = null;
    }
    else {
	newvalue = '<mutation xmlns=\"http://www.w3.org/1999/xhtml\" '+txt+a.newvalue+txt2+'></mutation>';
    }
    if (a.oldvalue == null) {
	oldvalue = null;
    }
    else {
	oldvalue = '<mutation xmlns=\"http://www.w3.org/1999/xhtml\" '+txt+a.oldvalue+txt2+'></mutation>';
    }
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "change" && e.element == "mutation" && e.blockId == idlst[a.mutator] && e.newValue == newvalue && e.oldValue == oldvalue) {
	    dragflg = 0;
	    cnfmflg = false;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[0].slice()});
	    step++;
	    Tutorial.f0();
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
	    cnfmflg = false;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f8();
	}
	else {
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, Tutorial.f8);
	}
    });
}

Tutorial.f9 = function() {
    dragflg = 7;
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f9, 7);
    if (a.bubble)
	t = a.bubble[8];
    else
	t = "";
    if (Blockly.mainWorkspace.getBlockById(idlst[a.trash]) != null) {
	block = Blockly.mainWorkspace.getBlockById(idlst[a.trash]).svgPath_;
	trs = document.querySelector("g[class='blocklyTrash']");
	rct = trs.getBoundingClientRect();
	bubbleflg = 0;
	Tutorial.intro.addSteps([{element: trs, intro: t+'ブロックをゴミ箱にドラッグ'}]).onchange(function(e){if(e!=trs){dark();}else{clear_rect();draw_rect(block);draw_rect2(rct.x-Blockly.mainWorkspace.toolbox_.width, rct.y+30, rct.width-40, rct.height-60, true);bubble(0, block, rct.x-Blockly.mainWorkspace.toolbox_.width, rct.y+30, rct.width-40, rct.height-60);}}).start();
	
    }
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "delete" && e.blockId == idlst[a.trash]) {
	    dragflg = 0;
	    cnfmflg = false;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[0].slice()});
	    step++;
	    Tutorial.f0();
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
	    cnfmflg = false;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f9();
	}
	else if (e.__proto__.type == "move" && e.blockId == idlst[a.trash]) {
	}
	else if (e.__proto__.type == "delete" && Blockly.selected != null) {
	}
	else if (e.__proto__.type == "move" && e.blockId != Blockly.selected.id) {
	}
	else {
	    console.log(e);
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, Tutorial.f9);
	}
    });
}

function introstart(n) {
    Blockly.mainWorkspace.clear();
    if (n == 3) {
	var code = "let width = 800\nlet height = 500\n;; big_bang 0";
    }
    else if (n == 4) {
	var code ="let width = 800\nlet height = 500\nlet draw world = place_image (rectangle 20 10 Color.red) (50, 50) (empty_scene width height);; big_bang 0\n  ~width:width\n  ~height:height";
    }
    else if (n == 5) {
	var code = "let width = 800\nlet height = 500\nlet draw world = \nplace_image (circle 20 Color.red) (100, world) (empty_scene width height)\nlet on_tick world = \nworld + 10\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw";
    }
    else if (n == 6) {
	var code = "let draw (x, y) =\n  place_image (circle 20 Color.red) (x, y) (empty_scene 200 200) \nlet on_tick ? =\n  ?\n;; big_bang (0, 150)\n  ~to_draw:draw\n  ~on_tick:on_tick";
    }
    else if (n == 7) {
	var code = "let draw world =\n  place_image (circle 20 Color.red) (world, 150) (empty_scene 200 200)\nlet on_tick world =\n  world + 10\n;; big_bang 0\n  ~to_draw:draw\n  ~on_tick:on_tick";
    }
    else if (n == 9) {
	var code = "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = ay + 10; banana = by; melon = my; bird = x; score = score}\nlet on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =\n  {apple = ay; banana = by; melon = my; bird = x + 1; score = score}\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick";
    }
    else if (n == 11) {
	var code = "let draw (x, y) =\n  place_image (circle 20 Color.red) (x, y) (empty_scene 200 200)\nlet on_tick (x, y) =\n  (x + 3, y - 1)\nlet on_key (x, y) key =\n  if key = \"up\" then (x, y + 1)\n  else (x, y)\nlet stop_when (x, y) =\n  x < 0 || y < 0 || x > 200\n;; big_bang (0, 15)\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~on_key_press:on_key";
    }
    else if (n == 13) {
	var code = "type fruit_t = {\n  apple : int;\n  banana : int;\n}";
    }
    else if (n == 15) {
	var code = "let width = 800\nlet height = 500";
    }
    else if (n == 16) {
	var code = "let width = 800\nlet height = 500\nlet draw world =\n  ?"
    }
    else if (n == 17) {
	var code = "let width = 500";
    }
    else if (n == 18) {
	var code = "let f x =\nx + 1";
    }
    else if (n == 19) {
	var code = "let f x =\nx + 1\nlet a = f 3";
    }
    else if (n == 20) {
	var code = "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, 50) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw"
    }
    else if (n == 21) {
	var code = "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw"
    }
    else if (n == 22 || n == 23) {
	var code = "let width = 800\nlet height = 500\nlet draw world = \nplace_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world = \nworld + 10\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick";
    }
    else if (n == 24) {
	var code = "type fruit_t = {\n  apple : int;\n  banana : int;\n}";
    }
    else if (n == 25) {
	var code = "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw ? =\n  ?\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw";
    }
    else if (n == 26) {
	var code = "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (empty_scene width height))\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw";
    }
    else if (n == 27) {
	var code = "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick ? =\n  ?\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick";
    }
    else if (n == 28) {
	var code = "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = score}\nlet on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =\n  ?\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick";
    }
    else if (n == 29) {
	var code = "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = score}\nlet on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =\n  ?\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~on_key_press:on_key";
    }
    else if (n == 30) {
	var code = "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = score}\nlet on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =\n  {apple = ay; banana = by; melon = my; bird = (if key = \"right\" then x + 10\n  else x); score = score}\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~on_key_press:on_key";
    }
    else if (n == 32) {
	var code = "let check y =\n  ?";
    }
    else if (n == 33) {
	var code = "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet check y =\n  y >= 455 && y <= 465";
    }
    else if (n == 34) {
	var code = "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw"
    }
    else if (n == "h0"){
	var code = "let a = 1\nlet b = ? + 2";
    }
    else if (n == "h1"){
	var code = "let f x =\n  x + 1";
    }
    else if (n == "h2"){
	var code = "let f ? =  ?";
    }
    else if (n == "h3"){
	var code = "let f x =  ? + 1";
    }
    else if (n == "h4"){
	var code = "let f x =\n  x + 1\nlet a = ?";
    }
    if (code) {
        openModal();
        setTimeout(function() {
	    BlockOfOCamlUtils.codeToBlock(code);
	    closeModal();
        }, 100);
        setTimeout(function() {
	    if (n == 3) {
		bigbang = Blockly.mainWorkspace.getBlocksByType("big_bang_typed", true)[0];
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		width = letblock.filter(x=>x.getField("VAR").getText() == "width");
		height = letblock.filter(x=>x.getField("VAR").getText() == "height");
		initidlst = [bigbang.id, width[0].id, height[0].id];
	    }
	    else if (n == 4) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		width = letblock.filter(x=>x.getField("VAR").getText() == "width");
		height = letblock.filter(x=>x.getField("VAR").getText() == "height");
		draw = letblock.filter(x=>x.getField("VAR").getText() == "draw");
		bigbang = Blockly.mainWorkspace.getBlocksByType("big_bang_typed", true)[0].id;
		initidlst = [width[0].id, height[0].id, draw[0].id, bigbang];
	    }
	    else if (n == 5) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		letblock = letblock.filter(x=>x.getField("VAR").getText() == "on_tick");
		id1 = letblock[0].id;
		id2 = Blockly.mainWorkspace.getBlocksByType("big_bang_typed", true)[0].id;
		initidlst = [id1, id2];
	    }
	    else if (n == 6) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		letblock = letblock.filter(x=>x.getField("VAR").getText() == "on_tick");
		id1 = letblock[0].id;
		initidlst = [id1];
	    }
	    else if (n == 7) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		draw = letblock.filter(x=>x.getField("VAR").getText() == "draw")[0];
		on_tick = letblock.filter(x=>x.getField("VAR").getText() == "on_tick")[0];
		world1 = draw.getInputTargetBlock("ARG0");
		pair = draw.getInputTargetBlock("EXP1").getInputTargetBlock("PARAM1");
		imagey = pair.getInputTargetBlock("SECOND");
		world2 = on_tick.getInputTargetBlock("ARG0");
		plus = on_tick.getInputTargetBlock("EXP1");
		big_bang = Blockly.mainWorkspace.getBlocksByType("big_bang_typed", true)[0];
		initial = big_bang.getInputTargetBlock("INITIAL_WORLD");
		initidlst = [draw.id, world1.id, pair.id, imagey.id, on_tick.id, world2.id, plus.id, big_bang.id, initial.id];
	    }
	    else if (n == 9) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		onkey = letblock.filter(x=>x.getField("VAR").getText() == "on_key");
		id1 = onkey[0].id;
		id2 = Blockly.mainWorkspace.getBlocksByType("big_bang_typed", true)[0].id;
		initidlst = [id1, id2];
		letblocks = letblock.filter(x=>x.getField("VAR").getText() != "on_key");
		for (var i=0, blk; blk=letblocks[i]; i++) {
		    blk.setCollapsed(true);
		}
	    }
	    else if (n == 11) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		letblock = letblock.filter(x=>x.getField("VAR").getText() == "stop_when");
		id1 = letblock[0].id;
		id2 = Blockly.mainWorkspace.getBlocksByType("big_bang_typed", true)[0].id;
		initidlst = [id1, id2];
	    }
	    else if (n == 13) {
		typeblock = Blockly.mainWorkspace.getBlocksByType("defined_recordtype_typed", true);
		initidlst = [typeblock[0].id];
	    }
	    else if (n == 15) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		width = letblock.filter(x=>x.getField("VAR").getText() == "width");
		height = letblock.filter(x=>x.getField("VAR").getText() == "height");
		initidlst = [width[0].id, height[0].id];
	    }
	    else if (n == 16) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		width = letblock.filter(x=>x.getField("VAR").getText() == "width");
		height = letblock.filter(x=>x.getField("VAR").getText() == "height");
		draw = letblock.filter(x=>x.getField("VAR").getText() == "draw");
		initidlst = [width[0].id, height[0].id, draw[0].id];
	    }
	    else if (n == 17) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		letblock = letblock.filter(x=>x.getField("VAR").getText() == "width");
		initidlst = [letblock[0].id];
	    }
	    else if (n == 18) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		letblock = letblock.filter(x=>x.getField("VAR").getText() == "f");
		initidlst = [letblock[0].id];
	    }
	    else if (n == 19) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		letblock = letblock.filter(x=>x.getField("VAR").getText() == "f");
		plus = letblock[0].getInputTargetBlock("EXP1");
		num = plus.getInputTargetBlock("B");
		app = Blockly.mainWorkspace.getBlocksByType("function_app_typed", true);
		app = app.filter(x=>x.getField("VAR").getText() == "f");
		id1 = letblock[0].id;
		id2 = num.id;
		id3 = plus.id;
		initidlst = [id1, id2, id3, app[0].id];
	    }
	    else if (n == 20) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		letblock = letblock.filter(x=>x.getField("VAR").getText() == "draw");
		num = letblock[0].getInputTargetBlock("ARG0");
		pair = Blockly.mainWorkspace.getBlocksByType("pair_create_typed")[0];
		y = pair.getInputTargetBlock("SECOND");
		initidlst = [num.id, pair.id, y.id];
	    }
	    else if (n == 21) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		letblock = letblock.filter(x=>x.getField("VAR").getText() == "draw");
		id1 = letblock[0].id;
		initidlst = [id1];
	    }
	    else if (n == 22) {
		bigbang = Blockly.mainWorkspace.getBlocksByType("big_bang_typed", true)[0].id;
		initidlst = [bigbang];
	    }
	    else if (n == 23) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		height = letblock.filter(x=>x.getField("VAR").getText() == "height");
		ontick = letblock.filter(x=>x.getField("VAR").getText() == "on_tick");
		world = ontick[0].getInputTargetBlock("ARG0");
		plus = ontick[0].getInputTargetBlock("EXP1");
		initidlst = [height[0].id, ontick[0].id, world.id, plus.id];
	    }
	    else if (n == 24) {
		typeblock = Blockly.mainWorkspace.getBlocksByType("defined_recordtype_typed", true);
		initidlst = [typeblock[0].id];
	    }
	    else if (n == 25) {
		typeblock = Blockly.mainWorkspace.getBlocksByType("defined_recordtype_typed", true);
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		width = letblock.filter(x=>x.getField("VAR").getText() == "width");
		height = letblock.filter(x=>x.getField("VAR").getText() == "height");
		draw = letblock.filter(x=>x.getField("VAR").getText() == "draw");
		initidlst = [typeblock[0].id, width[0].id, height[0].id, draw[0].id];
	    }
	    else if (n == 26) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		letblock = letblock.filter(x=>x.getField("VAR").getText() == "draw");
		world = letblock[0].getInputTargetBlock("ARG0");
		x = world.getInputTargetBlock("FIELD_INP3");
		score = world.getInputTargetBlock("FIELD_INP4");
		placeimage = letblock[0].getInputTargetBlock("EXP1");
		placeimage2 = placeimage.getInputTargetBlock("PARAM2");
		initidlst = [x.id, score.id, placeimage.id, placeimage2.id];
	    }
	    else if (n == 27) {
		typeblock = Blockly.mainWorkspace.getBlocksByType("defined_recordtype_typed", true);
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		ontick = letblock.filter(x=>x.getField("VAR").getText() == "on_tick");
		letblocks = letblock.filter(x=>x.getField("VAR").getText() != "on_tick");
		for (var i=0, blk; blk=letblocks[i]; i++) {
		    console.log(i);
		    blk.setCollapsed(true);
		}
		initidlst = [typeblock[0].id, ontick[0].id];
	    }
	    else if (n == 28) {
		typeblock = Blockly.mainWorkspace.getBlocksByType("defined_recordtype_typed", true);
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		onkey = letblock.filter(x=>x.getField("VAR").getText() == "on_key");
		world = onkey[0].getInputTargetBlock("ARG0");
		ay = world.getInputTargetBlock("FIELD_INP0");
		by = world.getInputTargetBlock("FIELD_INP1");
		my = world.getInputTargetBlock("FIELD_INP2");
		x = world.getInputTargetBlock("FIELD_INP3");
		score = world.getInputTargetBlock("FIELD_INP4");
		initidlst = [typeblock[0].id, onkey[0].id, ay.id, by.id, my.id, x.id, score.id];
		letblocks = letblock.filter(x=>x.getField("VAR").getText() != "on_key");
		for (var i=0, blk; blk=letblocks[i]; i++) {
		    console.log(i);
		    blk.setCollapsed(true);
		}
	    }
	    else if (n == 29) {
		typeblock = Blockly.mainWorkspace.getBlocksByType("defined_recordtype_typed", true);
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		onkey = letblock.filter(x=>x.getField("VAR").getText() == "on_key");
		world = onkey[0].getInputTargetBlock("ARG0");
		ay = world.getInputTargetBlock("FIELD_INP0");
		by = world.getInputTargetBlock("FIELD_INP1");
		my = world.getInputTargetBlock("FIELD_INP2");
		x = world.getInputTargetBlock("FIELD_INP3");
		score = world.getInputTargetBlock("FIELD_INP4");
		key = onkey[0].getInputTargetBlock("ARG1");
		initidlst = [typeblock[0].id, onkey[0].id, ay.id, by.id, my.id, x.id, score.id, key.id];
		letblocks = letblock.filter(x=>x.getField("VAR").getText() != "on_key");
		for (var i=0, blk; blk=letblocks[i]; i++) {
		    console.log(i);
		    blk.setCollapsed(true);
		}
	    }
	    else if (n == 30) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		onkey = letblock.filter(x=>x.getField("VAR").getText() == "on_key");
		world = onkey[0].getInputTargetBlock("ARG0");
		x = world.getInputTargetBlock("FIELD_INP3");
		key = onkey[0].getInputTargetBlock("ARG1");
		ifblock = Blockly.mainWorkspace.getBlocksByType("logic_ternary_typed", true);
		initidlst = [x.id, key.id, ifblock[0].id];
		letblocks = letblock.filter(x=>x.getField("VAR").getText() != "on_key");
		for (var i=0, blk; blk=letblocks[i]; i++) {
		    console.log(i);
		    blk.setCollapsed(true);
		}
	    }
	    else if (n == 32) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		y = letblock[0].getInputTargetBlock("ARG0");
		initidlst = [letblock[0].id, y.id];
	    }
	    else if (n == 33) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		initidlst = [letblock[0].id];
	    }
	    else if (n == 34) {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		width = letblock.filter(x=>x.getField("VAR").getText() == "width");
		height = letblock.filter(x=>x.getField("VAR").getText() == "height");
		draw = letblock.filter(x=>x.getField("VAR").getText() == "draw");
		initidlst = [width[0].id, height[0].id, draw[0].id];
	    }
	    else if (n == "h0") {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		vara = letblock.filter(x=>x.getField("VAR").getText() == "a")[0];
		plus = Blockly.mainWorkspace.getBlocksByType("int_arithmetic_typed", true)[0];
		initidlst = [vara.id, plus.id];
	    }
	    else if (n == "h1") {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		initidlst = [letblock[0].id];
	    }
	    else if (n == "h2") {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		initidlst = [letblock[0].id];
	    }
	    else if (n == "h3") {
		blockx = Blockly.mainWorkspace.getBlocksByType("variable_pattern_typed", true)[0];
		plus = Blockly.mainWorkspace.getBlocksByType("int_arithmetic_typed", true)[0];
		initidlst = [blockx.id, plus.id];
	    }
	    else if (n == "h4") {
		letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
		letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
		letblock = letblock1.concat(letblock2);
		funf = letblock.filter(x=>x.getField("VAR").getText() == "f")[0];
		vara = letblock.filter(x=>x.getField("VAR").getText() == "a")[0];
		initidlst = [funf.id, vara.id];
	    }
	    if(n == 9) {
		Blockly.mainWorkspace.setScale(0.8);
		Blockly.mainWorkspace.scrollbar.set(200,500);
	    }
	    else if(n == 11) {
		Blockly.mainWorkspace.setScale(0.8);
		Blockly.mainWorkspace.scrollbar.set(200,650);
	    }
	    else if(n == 13) {
		Blockly.mainWorkspace.scrollbar.set(300,450);
	    }
	    else if(n == 26) {
		Blockly.mainWorkspace.setScale(0.8);
		Blockly.mainWorkspace.scrollbar.set(400,800);
	    }
	    if ((n+"").startsWith("h"))
		Tutorial.f(hintrolst[n.slice(1)]);
	    else
		Tutorial.f(introlst[n]);
	}, 1000);
    }
}

Tutorial.main = function(first=true) {
    Tutorial.intro.setOptions({
	nextToDone: false,
	keyboardNavigation: false,
	scrollToElement: false, 
	exitOnOverlayClick: false,}).onbeforeexit(function(){if(cnfmflg){return(confirm("チュートリアルを終了しますか?"))}else{cnfmflg=true}}).onexit(function(){clear_rect(); Blockly.mainWorkspace.removeChangeListener(f);});
    var query = location.search;
    var value = query.split("=");
    i = decodeURIComponent(value[1]);
	number = i;
    if (first) {
	div = document.createElement("div");
	div.innerHTML = "<br><br>";
	document.querySelector("div[class='blockToCode']").appendChild(div);
	back = document.createElement("button");
	back.textContent = "チュートリアルページに戻る";
	back.setAttribute("class", "btn");
	back.id = "backbutton";
	back.setAttribute("onclick",
       "if(confirm('ページを移動するとブロックが消えます。移動しますか？')) {\
          Typed.server_log('t_log', 'end t' + i, function () {\
            window.location.href = 'tutorial.html#t'+i;\
          });\
        }");
	document.querySelector("div[class='blockToCode']").appendChild(back);
	Typed.server_log('t_log', 'start t' + i);
    }
    if ((i+"").startsWith("h") || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 9 || i == 11 || i == 13 || i == 15 || i == 16 || i == 17 || i == 18 || i == 19　|| i == 20 || i == 21 || i == 22 || i == 23 || i == 24 || i == 25 || i == 26 || i == 27 || i == 28 || i == 29 || i == 30 || i == 32 || i == 33 || i == 34) {
	cnfmflg = false;
	Tutorial.intro.exit();
	step = 0;
	introstart(i);
    }
    else {
	cnfmflg = false;
	Tutorial.intro.exit();
	step = 0;
	initidlst = [];
	Tutorial.f(introlst[i]);
    }
}

var hintrolst = [[//0. 変数を使いたい
    {
        "text": [
            [
                {
                    "intro": "変数を使うには、使いたい変数の変数名の部分をドラッグします。bをa+2にしてみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "A"
        ]
    }
],[//1. 関数の引数を増やしたい
    {
        "text": [
            [
                {
                    "intro": "関数の引数を増やすには、歯車ボタンを使います。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "open": false,
        "newvalue": "2",
        "oldvalue": "1",
        "add": true
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            0,
            false
        ]
    }
],[//2. 引数ブロックを出したい
    {
        "text": [
            [
                {
                    "intro": "引数ブロックはパターンボタンを押すと出てきます。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    }
],[//3. 引数を使いたい
    {
        "text": [
            [
                {
                    "intro": "引数を使うには、使いたい引数ブロックの引数名の部分をドラッグします。関数fをx+1にしてみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "A"
        ]
    }
],[//4. 関数を使いたい
    {
        "text": [
            [
                {
                    "intro": "関数を使うには、使いたい関数ブロックの関数名の部分をドラッグします。aをf(0)にしてみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "fのブロックには穴が空いています。ここには引数が入ります。f(0)を計算する場合、0を入れます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "PARAM0"
        ]
    }
]
]
