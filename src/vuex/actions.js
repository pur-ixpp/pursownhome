// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/1.jpg',
        'static/img/nav/2.jpg',
        'static/img/nav/3.jpg',
        'static/img/nav/4.jpg',
        'static/img/nav/5.jpg',
        'static/img/nav/6.jpg'
      ],
      activity: [
        'static/img/nav/chrismas.jpg',
        'static/img/nav/christmas.jpg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

// 加载推荐专栏数据
export const loadSuggest = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const suggest = {
      detail: [
        {
          bigImg: 'static/img/index/suggest/游戏手机.png',
          itemFour: [
            {
              title: '玉兰油（OLAY）',
              intro: '小白瓶精华乳液',
              img: 'static/img/index/suggest/OLAY.png'
            },
            {
              title: 'Marmot',
              intro: '土拨鼠秋冬运动防装',
              img: 'static/img/index/suggest/冬季装.png'
            },
            {
              title: '保暖内衣',
              intro: '南极人男女士蓄热内衣',
              img: 'static/img/index/suggest/南极人.png'
            },
            {
              title: 'JBL',
              intro: '真-无线式蓝牙耳机',
              img: 'static/img/index/suggest/耳机.png'
            }
          ]
        },
        {
          bigImg: 'static/img/index/suggest/数码家电.png',
          itemFour: [
            {
              title: '医用口罩',
              intro: '现货当天发',
              img: 'static/img/index/suggest/口罩.png'
            },
            {
              title: '机器人',
              intro: '小胖智能机器人',
              img: 'static/img/index/suggest/机器人.png'
            },
            {
              title: '茅台酒',
              intro: '整箱6瓶只需88',
              img: 'static/img/index/suggest/茅台.png'
            },
            {
              title: 'OPPLE',
              intro: 'led吸顶灯具套餐',
              img: 'static/img/index/suggest/照明灯.png'
            }
          ]
        }
      ]
    };
    commit('SET_SUGGEST_INFO', suggest);
  });
};

// 加载电脑专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '电脑数码',
      link: [ '电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊' ],
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-1.jpg',
          itemFour: [
            {
              title: '电脑馆',
              intro: '笔记本999元限量秒！',
              img: 'static/img/index/computer/item-computer-2.jpg'
            },
            {
              title: '外设装备',
              intro: '1000减618',
              img: 'static/img/index/computer/item-computer-1-3.jpg'
            },
            {
              title: '电脑配件',
              intro: '联合满减最高省618',
              img: 'static/img/index/computer/item-computer-1-4.jpg'
            },
            {
              title: '办公生活',
              intro: '5折神券 精品文具',
              img: 'static/img/index/computer/item-computer-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-1-6.jpg',
            'static/img/index/computer/item-computer-1-7.jpg',
            'static/img/index/computer/item-computer-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-2-1.jpg',
          itemFour: [
            {
              title: '平板电脑',
              intro: '爆款平板12期免息',
              img: 'static/img/index/computer/item-computer-2-2.jpg'
            },
            {
              title: '智能酷玩',
              intro: '抢999减666神券',
              img: 'static/img/index/computer/item-computer-2-3.jpg'
            },
            {
              title: '娱乐影音',
              intro: '大牌耳机低至5折',
              img: 'static/img/index/computer/item-computer-2-4.jpg'
            },
            {
              title: '摄影摄像',
              intro: '大牌相机5折抢',
              img: 'static/img/index/computer/item-computer-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-2-6.jpg',
            'static/img/index/computer/item-computer-2-7.jpg',
            'static/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载爱吃专栏数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '爱吃',
      link: [ '休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃' ],
      detail: [
        {
          bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
          itemFour: [
            {
              title: '粮油调味',
              intro: '买2免1',
              img: 'static/img/index/eat/item-eat-1-2.jpg'
            },
            {
              title: '饮料冲调',
              intro: '第二件半价',
              img: 'static/img/index/eat/item-eat-1-3.jpg'
            },
            {
              title: '休闲零食',
              intro: '满99减40',
              img: 'static/img/index/eat/item-eat-1-4.jpg'
            },
            {
              title: '中外名酒',
              intro: '满199减100',
              img: 'static/img/index/eat/item-eat-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-1-6.jpg',
            'static/img/index/eat/item-eat-1-7.jpg',
            'static/img/index/eat/item-eat-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
          itemFour: [
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-2-6.jpg',
            'static/img/index/eat/item-eat-2-7.jpg',
            'static/img/index/eat/item-eat-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/item-detail-1.jpg',
          'static/img/goodsDetail/item-detail-2.jpg',
          'static/img/goodsDetail/item-detail-3.jpg',
          'static/img/goodsDetail/item-detail-4.jpg',
          'static/img/goodsDetail/item-detail-5.jpg'
        ],
        title: '有匪全集套装4册 赵丽颖、王一博领衔主演电视剧《有翡》原著小说',
        tags: ['人气畅销书作家Priest古言小说扛鼎之作！豆瓣年度读书榜单推荐作品！——愿你在冷铁卷刃前，得以窥见天光。'],
        discount: ['满1000减10', '满2008减20', '满2880减30'],
        promotion: ['跨店满减', '多买优惠'],
        remarksNum: 36212,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/少年游.jpg',
              intro: '有匪1少年游',
              price: 22.6
            },
            {
              img: 'static/img/goodsDetail/pack/离恨楼.jpg',
              intro: '有匪2离恨楼',
              price: 23.3
            },
            {
              img: 'static/img/goodsDetail/pack/少年游.jpg',
              intro: '有匪3多情累',
              price: 22.6
            }
          ],
          [
            {
              img: 'static/img/goodsDetail/pack/多情累.jpg',
              intro: '有匪4挽山河',
              price: 22.6
            },
            {
              img: 'static/img/goodsDetail/pack/有匪全套.jpg',
              intro: '少年游+离恨楼（全两册套装）',
              price: 71.0
            },
            {
              img: 'static/img/goodsDetail/pack/有匪全套.jpg',
              intro: '有匪全集（套装4册）',
              price: 140.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/白夜行.png',
            price: 2800.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/飞往山.png',
            price: 36.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/鹤亭.png',
            price: 38.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/活着.png',
            price: 39.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/明朝那些事.png',
            price: 25.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/三体.png',
            price: 20.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail/intro/1.jpg',
          'static/img/goodsDetail/intro/2.jpg',
          'static/img/goodsDetail/intro/3.jpg',
          'static/img/goodsDetail/intro/4.jpg'
        ],
        param: [
          {
            title: '出版社',
            content: '湖南文艺出版社'
          },
          {
            title: 'ISBN',
            content: '9787540483012'
          },
          {
            title: '版次',
            content: '1'
          },
          {
            title: '商品编码',
            content: '12189711'
          },
          {
            title: '品牌',
            content: '博集天卷'
          },
          {
            title: '包装',
            content: '盒装'
          },
          {
            title: '开本',
            content: '16开'
          },
          {
            title: '出版时间',
            content: '2017-10-01'
          },
          {
            title: '用纸',
            content: '胶版纸'
          },
          {
            title: '出页数',
            content: '1271'
          },
          {
            title: '套装数量',
            content: '4'
          },
          {
            title: '字数',
            content: '1019000'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '品质一流', '印刷上乘', '质地上乘', '完好无损', '图文清晰', '精美雅致', '纸张精良', '优美详细', '小巧精致', '图案精美', '已经买第二本', '字迹清晰' ],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: '我人傻了',
              values: 5,
              content: '不错，剧情很棒。还赠海报呢，非常漂亮。纸质很好，字迹清晰，字不是特别小，看得眼睛很舒服。快递特别快，发货也很快，前天晚上订的，今天就到了。支持Priest大大的作品，古言的担当啊，下次我还会在京东买，疫情下还能这么快，真棒。',
              goods: '有匪1：少年游',
              create_at: '2020-02-19 12:52'
            },
            {
              username: '西***x',
              values: 5,
              content: '这次购物又是一样的满意，最近几天又生发出了刚消停几天的购书欲，连续几天都在下订单，又买了各种各样的书，感觉又需要好好整理一下书桌书架了，已经堆的似小山。买了王阳明的全集，既能提高文言功底，又可以领会一下先贤们思想的精髓、了解心学的神奇与瑰丽。买了上海辞书出版的古文和唐诗鉴赏，无疑是在现今社会浮躁的空气中找寻心灵的静谧，修身养性，方能齐家治国平天下。买了光学的两本著作和万物简史等等很多。总之真的是非常满意。再次感谢快递员的辛苦工作！希望和各位书友共同进步！',
              goods: '有匪1：少年游',
              create_at: '2017-06-19 15:23'
            },
            {
              username: '顺儿',
              values: 4.5,
              content: '看了陈情令为了王一博又买了有匪，先看看，再看电视剧。书非常棒，有塑封，赠品都有，纸质很好，特别开心。快递也很棒。',
              goods: '有匪全集（套装）',
              create_at: '2020-03-18 12:25'
            },
            {
              username: 'c****0',
              values: 5,
              content: '有匪真的不愧是大神级作家的作品，一口气读完，手机不玩了，儿子也不管了，不要打扰我读书，哈哈哈！故事情节紧凑，环环相扣，引人入胜，很是期待影视作品啦！在京东上购物已经习惯了，非常信赖，服务到位，包装整齐完好，快递小哥细心周到，商品品质也有保障，每次都特别满意，支持京东',
              goods: '有匪全集',
              create_at: '2020-04-06 16:23'
            },
            {
              username: '半里--',
              values: 4.5,
              content: '主要还是因为Priest买的这套书，个人感觉江湖恩怨，朝堂变迁都描述的淋漓尽致，是非常优秀的作品。',
              goods: '有匪全集',
              create_at: '2020-03-15 19:24'
            },
            {
              username: '小发明1****e',
              values: 5,
              content: '很好，没有跳页，非酋竟然抽到了ssr??！',
              goods: '少年游+离恨楼（全两册套装）',
              create_at: '2020-03-10 10:13'
            }
          ]
        }
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsList: [
          {
            img: 'static/img/goodsList/手工大王.png',
            price: 65.00,
            intro: '幼儿手工大王（套装共6册）',
            remarks: 6160,
            shopName: '幼儿图书专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/传家.png',
            price: 549.00,
            intro: '传家：中国人的生活智慧',
            remarks: 3000,
            shopName: '新星出版社',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/古龙.png',
            price: 800.00,
            intro: '古龙代表作大全集（共11部，计39册）',
            remarks: 2800,
            shopName: 'ai出版社',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/百科全书.png',
            price: 119.90,
            intro: '小猛犸童书：DK小学生百科全书  微观世界',
            remarks: 9000,
            shopName: '猛犸出版社',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/七杀简史.png',
            price: 39.00,
            intro: '七杀简史（文学史上的新物种，雄踞世界文明）',
            remarks: 6160,
            shopName: '七杀出版社',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/价值.png',
            price: 70.80,
            intro: '价值：我对投资的思考（张磊 价值投资）',
            remarks: 9006,
            shopName: '价值出版社',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/头号罪犯.png',
            price: 45.70,
            intro: '头号罪犯（约翰·勒卡雷作品）',
            remarks: 8666,
            shopName: '头号出版社',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/次要的雪.png',
            price: 35.10,
            intro: '次要的雪',
            remarks: 6080,
            shopName: '歌雪花出版社',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/书法课.png',
            price: 88.30,
            intro: '书法课',
            remarks: 6160,
            shopName: '书法出版社',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/龙族.png',
            price: 92.00,
            intro: '龙族 十周年纪念版随机限定编号套装',
            remarks: 3000,
            shopName: '龙族出版社',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/人类简史.png',
            price: 40.00,
            intro: '愚蠢的人类（毒舌脱口秀版“人类简史”）',
            remarks: 2800,
            shopName: '简史出版社',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/成法.png',
            price: 39.90,
            intro: '成法（京东专享稻盛和夫管理哲学名言）',
            remarks: 9000,
            shopName: '稻盛出版社',
            sale: 6360
          },
          {
            img: 'static/img/goodsList/心战.png',
            price: 70.60,
            intro: '心战  深度解析围棋顶尖棋手的巅峰对决',
            remarks: 6160,
            shopName: '巅峰出版社',
            sale: 5530
          },
          {
            img: 'static/img/goodsList/1小时就懂的沟通课.png',
            price: 33.10,
            intro: '1小时就懂的沟通课（百万销售量作者李尚龙）',
            remarks: 9006,
            shopName: '上龙出版社',
            sale: 5560
          },
          {
            img: 'static/img/goodsList/欧洲之痛.png',
            price: 43.50,
            intro: '欧洲之痛：难民浪潮还是贫困入侵',
            remarks: 8666,
            shopName: '欧通出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/分析与思考.png',
            price: 98.50,
            intro: '分析与思考--黄其饭的负担经济科',
            remarks: 8666,
            shopName: '欧通出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/小美.png',
            price: 43.50,
            intro: '小美',
            remarks: 11266,
            shopName: '小美出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/打胜仗的策略.png',
            price: 163.50,
            intro: '打胜仗系列：打胜仗的策略',
            remarks: 81266,
            shopName: '室长出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/故宫.png',
            price: 1243.50,
            intro: '故宫日历 十二年合集典藏版',
            remarks: 4236,
            shopName: '故宫出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/育儿百科.png',
            price: 108.50,
            intro: '美国儿科学会育儿百科（第7版）',
            remarks: 82876,
            shopName: '育儿出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/西藏西藏.png',
            price: 243.50,
            intro: '西藏西藏！《中国国家地理》',
            remarks: 88921,
            shopName: '中国出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/海错图.png',
            price: 108.50,
            intro: '海错图全本 日历（2021）团购优惠',
            remarks: 1290,
            shopName: '海错出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/1001幅画.png',
            price: 251.50,
            intro: '有生之年一定要看的1001幅画（第四版）精',
            remarks: 8989,
            shopName: '又是出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/艺术博物馆.png',
            price: 1120.50,
            intro: '艺术博物馆',
            remarks: 10123,
            shopName: '艺术出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/中国的传统色.png',
            price: 100.50,
            intro: '中国的传统色 故宫里的色彩美学',
            remarks: 5673,
            shopName: '中信出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/女孩的学习力.png',
            price: 49.50,
            intro: '女孩的学习力',
            remarks: 112,
            shopName: '女孩出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/整体养育.png',
            price: 39.80,
            intro: '整体养育（帮助父母了解儿童发展的规律）',
            remarks: 77732,
            shopName: '养育出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/瘦身.png',
            price: 34.50,
            intro: '瘦身，重启人生 身体和心灵的自我重塑之术',
            remarks: 9822,
            shopName: '瘦身出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/疼痛手册.png',
            price: 43.50,
            intro: '跑者常见疼痛手册',
            remarks: 8666,
            shopName: '创建出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/人体的秘密.png',
            price: 69.50,
            intro: '人体的秘密：那些说不出口的正经事',
            remarks: 12312,
            shopName: '人体出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/海面之下.png',
            price: 50.20,
            intro: '海面之下：海洋生物形态图鉴',
            remarks: 6792,
            shopName: '海洋出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/公式之美.png',
            price: 70.50,
            intro: '公式之美 中国好书（随机发放签名本）',
            remarks: 1233,
            shopName: '公式出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/Java无难事.png',
            price: 178.50,
            intro: 'Java无难事--详解Java编程核心思想',
            remarks: 8666,
            shopName: 'Java出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/月背征途.png',
            price: 60.50,
            intro: '月背征途：嫦娥五号发射！中国探月工程',
            remarks: 8666,
            shopName: '月球出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/算法小抄.png',
            price: 49.50,
            intro: 'labuladong的算法小抄（博文视点出品）',
            remarks: 8666,
            shopName: '博文出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/牛津英语词典.png',
            price: 144.50,
            intro: '牛津高阶英汉双节词典（第九版）含光盘',
            remarks: 45666,
            shopName: '牛津出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/spark.png',
            price: 43.50,
            intro: '[自备备考2020.12月]星火英语四级真题',
            remarks: 3223,
            shopName: '',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/英语写作.png',
            price: 34.50,
            intro: '从KET到FCE：英语写作通关秘籍',
            remarks: 54654,
            shopName: 'KET出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/笔记本.png',
            price: 6.50,
            intro: '随机随用 阅读计划本（便携 小楷本）',
            remarks: 43543,
            shopName: '急用出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/地球仪.png',
            price: 34.50,
            intro: '2020年新版地理启蒙地球仪 360度旋转',
            remarks: 43436,
            shopName: '心焦出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/海南.png',
            price: 945.50,
            intro: '打中华寻宝记全套 科普知识漫画（1-27）',
            remarks: 45745,
            shopName: '中华出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/我要去故宫.png',
            price: 482.50,
            intro: '我要去故宫（套装20册）',
            remarks: 8666,
            shopName: '故宫出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/1000Word.png',
            price: 405.50,
            intro: '小考拉电镀比 配饰幼儿启蒙英语妙趣绘本',
            remarks: 46565,
            shopName: '考拉出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/转啊转.png',
            price: 300.00,
            intro: '铃木绘本计算机 爱与成长（全20册）',
            remarks: 3223,
            shopName: '铃木出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/复仇者联盟.png',
            price: 64.50,
            intro: '复仇者联盟系列电影纪念专辑：终极纪念版',
            remarks: 52398,
            shopName: '扶持出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/助力心.png',
            price: 200.00,
            intro: '松下新之助的助力心：经营之神松下',
            remarks: 8666,
            shopName: '松下出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/结构性改革.png',
            price: 62.10,
            intro: '结构性改革 中国经济的问题与对策',
            remarks: 23442,
            shopName: '中信出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/全球经济.png',
            price: 43.50,
            intro: '后疫情时代的全球经济与世界秩序',
            remarks: 8666,
            shopName: '经济出版社',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/有匪全套.png',
            price: 70.80,
            intro: '有匪全集套装4册 赵丽颖、王一博领衔主演',
            remarks: 6080,
            shopName: '博天出版社',
            sale: 3560
          }
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '177266',
        name: '小明',
        province: '广东省',
        city: '广州市',
        area: '天河区',
        address: '燕岭路366号',
        phone: '152****0609',
        postalcode: '510000'
      },
      {
        addressId: '123458',
        name: '小红',
        province: '江苏省',
        city: '盐城市',
        area: '大丰区',
        address: '沙新镇',
        phone: '158****0888',
        postalcode: '200120'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/有匪全套.jpg',
      package: '有匪全套',
      price: 140,
      title: '有匪全套（套装4册）'
    }];
    commit('SET_SHOPPING_CART', data);
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'Gavin' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        if (item.username === data.username) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};
