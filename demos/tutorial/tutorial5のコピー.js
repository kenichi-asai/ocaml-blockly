var Tutorial = {};

text = [];
introlst = [];

text[0] = "2+3";
introlst[0] = [
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
                    "intro": "これで width という変数を定義して、その値を 500 とすることが\nできました。\nwidth という変数は、この let ブロックの下で使うことができます。\n例えば、width の半分を表す half という変数を定義してみましょう。\n"
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
        "id": 2,
        "target": [
            0,
            "NEXT"
        ],
        "name": "half"
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
        "id": 3,
        "target": [
            2,
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
        "id": 4,
        "target": [
            3,
            "A"
        ]
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
        "id": 5,
        "target": [
            3,
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
            [
                {
                    "intro": "f(x) の本体部分は x + 1 なので、\n足し算ブロックをメインスペースにドラッグ"
                }
            ],
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
            [],
            [
                {
                    "intro": "let ブロックのふたつ目のコネクタにつなぎます"
                }
            ],
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
                    "intro": "これで関数 f を表すブロックができました。\nそれでは f(3) の値を計算してみましょう"
                },
                {
                    "intro": "まず、関数 f のブロックの下に、もうひとつ変数ブロックをつなげます。\n"
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
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして関数 f のブロックの下につなぎます。"
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
        "id": 5,
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
        "id": 6,
        "target": [
            5,
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
                },
                {
                    "intro": "次に、関数 f を２引数関数 f(x, y) = x + y に変更してみましょう。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 7,
        "target": [
            6,
            "PARAM0"
        ],
        "value": [
            "3",
            "3"
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
            [
                {
                    "intro": "関数 f のふたつ目のパラメタのブロックを作ります。"
                }
            ],
            [],
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
        "id": 8,
        "target": [
            0,
            "ARG1"
        ],
        "name": "y"
    },
    {
        "text": [
            [
                {
                    "intro": "この 1 のブロックを変数 y のブロックに置き換えます。\nまず、1 のブロックをドラッグしてゴミ箱に移動します。"
                }
            ],
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
                    "intro": "y をドラッグして、足し算ブロックの右側のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "trash": 4
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "f(3, 4) を求めるには、f のふたつめのパラメタに 4 を入れます。"
                }
            ],
            []
        ],
        "variable": 8,
        "category": 10,
        "block": 0,
        "id": 9,
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
        "id": 10,
        "target": [
            6,
            "PARAM1"
        ],
        "value": [
            "4",
            "4"
        ]
    }
];

text[3] = "big_bangの歯車ボタン";
introlst[3] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、big_bang ブロックの歯車ボタンの使い方をみます。"
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
                    "intro": "big_bang ブロックのいろいろな機能は、\n歯車ボタンを使って使えるようにします。\n"
                }
            ],
            [],
            []
        ],
        "category": 8,
        "block": 8,
        "id": 0
    },
    {
        "text": [
            [ 
               {
                    "intro": "画面の高さを指定できるようにするには ~height ブロックをドラッグして、\n右の big_bang のところにつなげます"
                }
            ],
            [
                {
                    "intro": "画面の幅を指定できるようにするには ~width ブロックをドラッグして、\n右の big_bang のところにつなげます"
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
            [
                {
                    "intro": "これで、画面の幅と高さを指定できるようになりました。\n同様にして、他のブロックを右の big_bang のところにつなげると、\nその機能が使えるようになります。"
                }
            ],
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
];

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
            1
        ],
        "open": false,
        "bigbang": true,
        "newvalue": "draw=\"1\"",
        "oldvalue": null,
        "item": "world_draw_item",
        "add": -1
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
                    "intro": "これで、draw 関数の登録ができました。"
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
            "DRAW"
        ]
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
        "newvalue": "draw=\"1\" tick=\"1\"",
        "oldvalue": "draw=\"1\"",
        "item": "world_tick_item",
        "add": 1
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
                    "intro": "これで、on_tick 関数の登録ができました。\n"
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
        ]
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
        "newvalue": "draw=\"1\" tick=\"1\" keypress=\"1\"",
        "oldvalue": "draw=\"1\" tick=\"1\"",
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
                    "intro": "これで、on_key 関数の登録ができました。\n"
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
        ]
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
                    "intro": "ここでは、レコードを宣言します。名前と数学と英語の点数からなる学生のデータ seiseki_t を定義しましょう。\nレコード定義のブロックは「座標と世界の定義」メニューにあります。"
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
                    "intro": "フィールド名をクリックしてRename record name…を選択し、seiseki_tに変えましょう。\n"
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
                    "intro": "seiseki_tは3つのフィールドからなります。歯車ボタンを押すと フィールドを増やすことができます。"
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
        "name": "seiseki_t"
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "fieldを右側のfieldの下に2つ追加します。"
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
            [
                {
                    "intro": "これでフィールドが3つに増えました。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "open": true,
        "newvalue": "3",
        "oldvalue": "2",
        "add": true
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "1つ目のフィールドはstring型のnameです。フィールド名をクリックしてRename record field...を選択し、nameに変えましょう。"
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
        "name": "name"
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "nameフィールドの型はstringなのでstringブロックを1つ目のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            3
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
                    "intro": "2つ目のフィールドはmathです。フィールド名をmathに変えましょう。"
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
                    "intro": "mathフィールドの型はintなのでintブロックを2つ目のコネクタにつなぎます。"
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
        "name": "math"
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
                    "intro": "3つ目のフィールドはenglishです。フィールド名をenglishに変えましょう。"
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
                    "intro": "englishフィールドの型はintなのでintブロックを3つ目のコネクタにつなぎます。\n"
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
        "namefield": "FIELD2",
        "name": "english"
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
        "id": 3,
        "target": [
            0,
            "FIELD_INP2"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "これで、name, math, english という ３つのフィールドからなるレコード型 seiseki_t を定義できました。"
                },
                {
                    "intro": "レコードを宣言すると、そのブロックの下ではレコードを具体的に作ることができます。seiseki_t型の具体的なレコードを作りましょう。"
                },
                {
                    "intro": "nameフィールドの値が”asai”、mathの値が70、englishの値が80のレコードasai_seisekiを作ってみましょう。\nまず、変数ブロックをseiseki_tを定義するブロックの下につなぎます。"
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
                    "intro": "変数名をasai_seisekiに変更します。"
                }
            ],
            []
        ],
        "category": 9,
        "block": 0,
        "id": 4,
        "target": [
            0,
            "NEXT"
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "具体的なレコードを作るには、レコードの名前のところをドラッグします。seiseki_tをドラッグしてasai_seisekiのブロックにつなぎましょう。"
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
        "name": "asai_seiseki"
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "ドラッグしたレコードは指定したフィールドを持っており、 そこには具体的な値を入れることができます。"
                },
                {
                    "intro": "name フィールドの値は”asai”です。レコードブロックの1つめのコネクタに文字列ブロックをつなぎます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 5,
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
            [],
            [
                {
                    "intro": "mathフィールドの値は70です。レコードブロックの2つめのコネクタに数字ブロックをつなぎます。"
                }
            ]
        ],
        "category": 1,
        "block": 0,
        "id": 6,
        "target": [
            5,
            "FIELD_INP0"
        ],
        "value": [
            "asai",
            "asai"
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
                    "intro": "englishフィールドの値は80です。レコードブロックの3つめのコネクタに数字ブロックをつなぎます。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 7,
        "target": [
            5,
            "FIELD_INP1"
        ],
        "value": [
            "70",
            "70"
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
        "id": 8,
        "target": [
            5,
            "FIELD_INP2"
        ],
        "value": [
            "80",
            "80"
        ]
    }
]

text[13] = "レコードを受け取る関数";
introlst[13] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、レコードを受け取る関数を作ります。\n「seiseki_t 型のレコードを受け取ると、 その人の数学と英語の点数の平均を返す関数heikin」を作ってみましょう。\n"
                },
                {
                    "intro": "まず、関数ブロックをseiseki_tを定義するブロックの下につなぎます。\n"
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
                    "intro": "関数名をheikinに変更します。"
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
        "name": "heikin"
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
            1
        ],
        "category": 10,
        "block": 0,
        "id": 5,
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
                    "intro": "namaeフィールドの要素の名前をnに変更しましょう。"
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
                    "intro": "同様にmathフィールドはm、englishフィールドはeに名前を変更します。"
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
        "name": "n"
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
        "name": "m"
    },
    {
        "text": [
            [
                {
                    "intro": "heikinは、(m+e) / 2 を返します。四則演算ブロックをheikinのブロックの2つめのコネクタにつなぎましょう。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "id": 5,
        "skip": true,
        "category": 10,
        "block": 0,
        "name": "e"
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "割り算ブロックの左側に足し算ブロックをつなぎます。"
                }
            ]
        ],
        "category": 0,
        "block": 1,
        "id": 6,
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
                    "intro": "mをドラッグして、足し算ブロックの左側につなぎます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
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
            [
                {
                    "intro": "eをドラッグして、足し算ブロックの右側につなぎます。"
                }
            ],
            []
        ],
        "variable": 4,
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
            [
                {
                    "intro": "割り算ブロックの右側には数字の2を入れます。\n"
                }
            ],
            []
        ],
        "variable": 5,
        "category": 10,
        "block": 0,
        "id": 9,
        "target": [
            7,
            "B"
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
                    "intro": "これで、レコードを使う関数が完成しました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 10,
        "target": [
            6,
            "B"
        ],
        "value": [
            "2",
            "2"
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

function draw_rect2(x, y, width, height) {
    scale = Blockly.mainWorkspace.scale;
    x2 = Blockly.mainWorkspace.toolbox_.width + Blockly.mainWorkspace.scrollX + (x - 10) * scale;
    box5.setAttribute("style", "width:" + ((width+10)*scale) + "px; height:5px; left:" + x2 + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box6.setAttribute("style", "width:" + ((width+10)*scale+5) + "px; height:5px; left:" + x2 + "px; top:" + ((y+height+5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box7.setAttribute("style", "width:5px; height:" + ((height+10)*scale) + "px; left:" + x2 + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box8.setAttribute("style", "width:5px; height:" + ((height+10)*scale+5) + "px; left:" + (x2+(width+10)*scale) + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
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
	     ["defined_recordtype_typed", "レコード定義", "DATANAME"]],
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
    Tutorial.intro.addSteps([{intro: "チュートリアルクリア"}]).onchange(function(){}).start();
}

Tutorial.error = function() {
    alert("エラー！最初からやり直してください");
    Blockly.mainWorkspace.clear();
    Tutorial.f(lst);
}

Tutorial.cancel = function(e, f, g) {
    if (e.__proto__.type == "change" && e.element == "field" && lst[idlst.indexOf(e.blockId)]) {
	b = lst.filter(function(x){x.id == idlst.indexOf(e.blockId)})[0];
	if (b.value == undefined) {
	    value = Blockly.FieldTextInput.htmlInput_.defaultValue;
	}
	else value = b.value[1];
	if (e.newValue == value) {
	    alertflg = 0;
	}
	else if (alertflg == 0) {
	    alertflg = 1;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    window.setTimeout('alert("操作が違います！")', 11);
	    Blockly.selected.unselect();
	    Blockly.mainWorkspace.getBlockById(e.blockId).getField(blocklst[b.category][b.block][2]).setValue(value);
	    Blockly.FieldTextInput.htmlInput_.value = value;
	    g();
	}
	else {
	}
    }
    else if (e.__proto__.type == "create" || e.__proto__.type == "delete" || ((e.__proto__.type == "move" && (e.newParentId != undefined || e.oldParentId != undefined)) || e.__proto__.type == "change" || e.__proto__.type == "bound_var_rename")) {
	if (alertflg == 1) {
	    alertflg = 0;
	}
	else {
	    alertflg = 1;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    window.setTimeout('alert("操作が違います！")', 11);
	    Blockly.mainWorkspace.undo();
	    if (e.__proto__.type != "create" && Blockly.mainWorkspace.getBlockById(e.blockId) == null) {
		window.setTimeout(Tutorial.error, 11);
	    }
	    else {
		g();
	    }
	}
    }
}

function ondrag(x, y, s, g, n) {
    if (dragflg != n) {
    }
    else if (x == Blockly.mainWorkspace.scrollX &&
	     y == Blockly.mainWorkspace.scrollY &&
	     s == Blockly.mainWorkspace.scale) {
	window.setTimeout(function(){ondrag(x, y, s, g, n);}, 1000);
    }
    else {
	Tutorial.intro.exit();
	Blockly.mainWorkspace.removeChangeListener(f);
	g();
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
    Tutorial.intro.addSteps([{element: target, intro: menulst[x]+"をクリック"}]).onchange(function(e){if(e!=target){dark();}else{clear_rect();draw_rect(target);}}).start();
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if(e.element == "category" && e.newValue == menulst[x]) {
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
    x = a.category;
    y = a.block;
    target = Blockly.mainWorkspace.toolbox_.flyout_.mats_[y];
    if (target.getAttribute("y") > Blockly.mainWorkspace.toolbox_.flyout_.height_) {
	Blockly.mainWorkspace.toolbox_.flyout_.scrollbar_.set((+target.getAttribute("y")) + (+target.getAttribute("height")) - Blockly.mainWorkspace.toolbox_.flyout_.height_)
    }
    if (!mousedown) {
	Tutorial.intro.addSteps([{element: target, intro: blocklst[x][y][1]+"ブロックをメインスペースにドラッグ"}]).onchange(function(e){if(e!=target){dark();}else{clear_rect();draw_rect(target);}}).start();
    }
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "create" && Blockly.mainWorkspace.getBlockById(e.blockId).type == blocklst[x][y][0]){
	    idlst.push(e.blockId);
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
	else if (e.__proto__.type == "ui" && !mousedown) {
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.setOptions({'steps': []});
	    Tutorial.f1();
	}
	else if (mousedown > 0 && e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined && idlst[a.id] == e.blockId) {
	    if (mousedown == 2) {
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.f2(1);
	    }
	    else {
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[2].slice()});
		Tutorial.f3();
	    }
	}
	else if (mousedown == 1 && e.__proto__.type == "ui" && e.element == "selected" && e.newValue == idlst[a.id]) {
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.f2(2);
	}
	else {
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, Tutorial.f2);
	}
    });
}

Tutorial.f3 = function() {
    console.log("f3");
    if (a.target) {
	dragflg = 1;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f3, 1);
	target = Blockly.mainWorkspace.getBlockById(idlst[a.target[0]]);
	if (a.target[1] == "NEXT") {
	    Tutorial.intro.addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();input = target.nextConnection;draw_rect2(input.x_-15, input.y_, 24, 0);}}).start();
	}
	else {
	    Tutorial.intro.addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();input = target.getInput(a.target[1]);draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);}}).start();
	}
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    block = Blockly.mainWorkspace.getBlockById(e.blockId);
	    if (e.__proto__.type == "move" && block.type == blocklst[a.category][a.block][0] && e.newParentId == target.id && (e.newInputName == a.target[1] || (a.target[1] == "NEXT" && e.newInputName == undefined))) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[3].slice()});
		Tutorial.f4();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.f3();
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
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
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f4, 2);
	block = Blockly.mainWorkspace.getBlockById(idlst[a.id]);
	field = block.getField(blocklst[a.category][a.block][2])
	Tutorial.intro.addSteps([{element: field.fieldGroup_, intro: a.value[0]+'に変更', position: 'top'}]).onchange(function(e){if(e!=field.fieldGroup_){dark();}else{clear_rect();draw_rect(field.fieldGroup_);}}).start();
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.__proto__.type == "change" && e.newValue == a.value[1]) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[4].slice()});
		Tutorial.f5();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.f4();
	    }
	    else if (e.__proto__.type == "change" && e.element == "field" && e.blockId == idlst[idlst.length-1]) {
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, Tutorial.f4);
	    }
	});
    }
    else {
	Tutorial.f5();
    }
}

Tutorial.f5 = function() {
    if (a.name != undefined) {
	dragflg = 3;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f5, 3);
	block = Blockly.mainWorkspace.getBlockById(idlst[a.id]);
	if (!(fieldname = a.namefield)) {
	    fieldname = blocklst[a.category][a.block][2];
	}
	field = block.getField(fieldname);
	Tutorial.intro.addSteps([{element: field.fieldGroup_, intro: '名前を'+a.name+'に変更', position: 'top'}]).onchange(function(e){if(e!=field.fieldGroup_){dark();}else{clear_rect();draw_rect(field.fieldGroup_);}}).start();
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.__proto__.type == "bound_var_rename" && field.getText() == a.name) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[0].slice()});
		step++;
		Tutorial.f0();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
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
		txt = "メニューを閉じる";
		next = function(){step++; Tutorial.f0();};
	    }
	    else {
		txt = str+'ボタンをクリック'
	    }
	    Tutorial.intro.addSteps([{element: icon, intro: txt}]).onchange(function(e){if(e!=icon){dark();}else{clear_rect();draw_rect(icon);}}).start();
	    Blockly.mainWorkspace.addChangeListener(f = function(e){
		if (e.element == el && e.blockId == block.id) {
		    dragflg = 0;
		    Tutorial.intro.exit();
		    clear_rect();
		    Blockly.mainWorkspace.removeChangeListener(f);
		    Tutorial.intro.setOptions({'steps': a.text[1].slice()});
		    next();
		}
		else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		    dragflg = 0;
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
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, function(){Tutorial.f7(arg)}, 5);
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
    }
    else {
	if (Blockly.mainWorkspace.getBlockById(idlst[a.variable]).type == "defined_recordtype_typed") {
	    field = "DATANAME";
	}
	else {
	    field = "VAR";
	}
	block = Blockly.mainWorkspace.getBlockById(idlst[a.variable]).getField(field).fieldGroup_;
    }
    Tutorial.intro.onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();draw_rect(block);draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);}}).addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).start();
    id = arg;
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "move" && (a.workbench != undefined || idlst[a.variable]) && e.blockId == id && e.newParentId == target.id && e.newInputName == a.target[1]) {
	    dragflg = 0;
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
	else {
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, function(){Tutorial.f7(null)});
	}
    });
}

Tutorial.f8 = function() {
    dragflg = 6;
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f8, 6);
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
	txt = "";
	txt2 = "";
    }
    else {
	max = a.oldvalue;
	el = block.mutator.workspace_.flyout_.mats_[0];
	txt = 'items=\"';
	txt2 = '\"';
    }
    for (var i=0; i<max; i++) {
	b = b.getChildren()[0];
    }
    if (a.add) {
	if (max == 0) {
	    connection = b.inputList[1].connection;
	}
	else {
	    connection = b.nextConnection;
	}
	Tutorial.intro.addSteps([{element: ws.svgBackground_, intro: 'ブロックをくっつける', position: 'bottom'}]).onchange(function(e){if(e!=ws.svgBackground_){dark();}else{clear_rect();draw_rect(el);draw_rect2(connection.x_+ws.workspaceArea_.left-Blockly.mainWorkspace.toolbox_.width-15, connection.y_+ws.workspaceArea_.top, 24, 0)}}).start();
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
	Tutorial.intro.addSteps([{element: el, intro: 'ブロックを外す', position: 'top'}]).onchange(function(e){if(e!=el){dark();}else{clear_rect();draw_rect(el)}}).start();
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
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[0].slice()});
	    step++;
	    Tutorial.f0();
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
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
    if (Blockly.mainWorkspace.getBlockById(idlst[a.trash]) != null) {
	block = Blockly.mainWorkspace.getBlockById(idlst[a.trash]).svgPath_;
    trs = document.querySelector("g[class='blocklyTrash']");
	Tutorial.intro.addSteps([{element: trs, intro: 'ブロックをゴミ箱にドラッグ'}]).onchange(function(e){if(e!=trs){dark();}else{clear_rect();draw_rect(block);}}).start();}
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "delete" && e.blockId == idlst[a.trash]) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[0].slice()});
	    step++;
	    Tutorial.f0();
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
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
    if (confirm("このチュートリアルを始めるとブロックが消えます。\nチュートリアルを始めますか？")) {
	Blockly.mainWorkspace.clear();
	if (n == 4) {
	    var code ="let draw v = place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" 100 100) (50, 50) (empty_scene 200 200);; big_bang 0";
	}
	else if (n == 5) {
	    var code = "let draw world = \nplace_image (circle 20 Color.red) (world, 100) (empty_scene 200 200)\nlet on_tick world = \nworld + 10\n;; big_bang 0\n  ~to_draw:draw";
	}
	else if (n == 6) {
	    var code = "let draw (x, y) =\n  place_image (circle 20 Color.red) (x, y) (empty_scene 200 200) \nlet on_tick ? =\n  ?\n;; big_bang (0, 150)\n  ~to_draw:draw\n  ~on_tick:on_tick";
	}
	else if (n == 7) {
	    var code = "let draw world =\n  place_image (circle 20 Color.red) (world, 150) (empty_scene 200 200)\nlet on_tick world =\n  world + 10\n;; big_bang 0\n  ~to_draw:draw\n  ~on_tick:on_tick";
	}
	else if (n == 9) {
	    var code = "let draw (x, y) =\n  place_image (circle 20 Color.red) (x, y) (empty_scene 200 200)\nlet on_tick (x, y) =\n  (x + 3, y - 1)\nlet on_key (x, y) key =\n  if key = \"up\" then (x, y + 1)\n  else (x, y)\n;; big_bang (0, 15)\n  ~to_draw:draw\n  ~on_tick:on_tick";
	}
	else if (n == 11) {
	    var code = "let draw (x, y) =\n  place_image (circle 20 Color.red) (x, y) (empty_scene 200 200)\nlet on_tick (x, y) =\n  (x + 3, y - 1)\nlet on_key (x, y) key =\n  if key = \"up\" then (x, y + 1)\n  else (x, y)\nlet stop_when (x, y) =\n  x < 0 || y < 0 || x > 200\n;; big_bang (0, 15)\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~on_key_press:on_key";
	}
	else if (n == 13) {
	    var code = "type seiseki_t = {\n  name : string;\n  math : int;\n  english : int;\n}";
	}
	if (code) {
            openModal();
            setTimeout(function() {
		BlockOfOCamlUtils.codeToBlock(code);
		closeModal();
            }, 100);
            setTimeout(function() {
		if (n == 4) {
		    id1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true)[0].id;
		    id2 = Blockly.mainWorkspace.getBlocksByType("big_bang_typed", true)[0].id;
		    initidlst = [id1, id2];
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
		    letblock = letblock.filter(x=>x.getField("VAR").getText() == "on_key");
		    id1 = letblock[0].id;
		    id2 = Blockly.mainWorkspace.getBlocksByType("big_bang_typed", true)[0].id;
		    initidlst = [id1, id2];
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
		if(n == 9) {
		    Blockly.mainWorkspace.setScale(0.8)
		    Blockly.mainWorkspace.scrollbar.set(200,400);
		}
		if(n == 11) {
		    Blockly.mainWorkspace.setScale(0.8)
		    Blockly.mainWorkspace.scrollbar.set(200,650);
		}
		Tutorial.f(introlst[n]);
	    }, 500);
	}
    }
}

Tutorial.main = function() {
    div = [];
    start = [];
    for (var i=0; i < introlst.length; i++) {
	div[i] = document.createElement("div");
	div[i].innerHTML = "<br>"+text[i];
	document.querySelector("div[class='blockToCode']").appendChild(div[i]);
	start[i] = document.createElement("button");
	start[i].textContent = "チュートリアルスタート";
	Tutorial.intro.setOptions({
	    nextToDone: false,
	    exitOnOverlayClick: false}).onexit(function(){clear_rect(); Blockly.mainWorkspace.removeChangeListener(f);});
	start[i].id = i;
	if (i == 4 || i == 5 || i == 6 || i == 7 || i == 9 || i == 11 || i == 13) {
	    start[i].onclick = function(e) {
		Tutorial.intro.exit();
		 step = 0;
		introstart(e.target.id);
	     };
	}
	else {
	    start[i].onclick = function(e) {
		Tutorial.intro.exit();
		step = 0;
		initidlst = [];
		Tutorial.f(introlst[e.target.id]);
	    };
	}
	document.querySelector("div[class='blockToCode']").appendChild(start[i]);
    }
}

