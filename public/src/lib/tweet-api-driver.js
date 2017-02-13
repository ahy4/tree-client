import $ from 'jquery';
import Promise from 'bluebird';

export function fetch(url, query) {
  return new Promise((resolve, reject) => {
    const token = JSON.parse(document.getElementById('token').innerHTML).token;
    query = Object.assign({}, { data:query }, { token });
    console.info(`GET [[${url}]]  query: ${JSON.stringify(query)}`);
    $.get(url, query)
      .done(resolve) // (data) => resolve(data)
      .fail(reject); // (xhr, status, err) => reject(url, status, err)
  });
}

var res = [
  {
    "created_at": "Sun Feb 12 13:07:09 +0000 2017",
    "id": 830765185367363600,
    "id_str": "830765185367363584",
    "text": "「リュウのストイックなキャラクターとウメハラの真摯な姿勢がきれいに重なった。ウメリュウは最高にクールだった」 闇の騎士バルログが取り調べ室で対戦プレイ動画ﾋｮの６０",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twittbot.net/\" rel=\"nofollow\">twittbot.net</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 522535567,
      "id_str": "522535567",
      "name": "格ゲーマー名言bot",
      "screen_name": "kakugemameigen",
      "location": "",
      "description": "古今東西の格闘ゲーマーの名言を呟いていきます。中には本人が言っていないものやネタ的なものも含まれます。ペースは２時間に１度で深夜は呟きません。フォロー返しは手動で行っているので遅れます。鍵垢の方には申請していません。格ゲー関連新商品の宣伝をすることがあります。",
      "url": "http://t.co/OLyezgP2xc",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/OLyezgP2xc",
              "expanded_url": "http://ja.favstar.fm/users/kakugemameigen",
              "display_url": "ja.favstar.fm/users/kakugema…",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 19880,
      "friends_count": 15167,
      "listed_count": 427,
      "created_at": "Mon Mar 12 19:56:10 +0000 2012",
      "favourites_count": 0,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 13914,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/2199180034/icon7948942168467053290______normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/2199180034/icon7948942168467053290______normal.jpg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 4,
    "favorite_count": 7,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:10:27 +0000 2017",
    "id": 830766014136660000,
    "id_str": "830766014136659968",
    "text": "底なしの馬鹿は別として、自信がどこからくるかというと絵に於いては「これまでの努力」だ。これが厄介でな、どんなに努力していても努力を自分で認めないと意味がない。結果を実感できていなかったり元来の性格だったりするかもしれないが、自分を受け入れ認めることから自信は始まる。覚えておけ。",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://twitter.com/skekyx\" rel=\"nofollow\">絵の描き方を教えてくれるエミネムさんbot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2276591558,
      "id_str": "2276591558",
      "name": "絵の描き方を教えてくれるエミネムさん",
      "screen_name": "E_minem_san_bot",
      "location": "",
      "description": "よう。今日からお前らにいいこと教えてやる。絵の描き方だ。　　 動画作者の自戒という名の手の込んだブーメランbotを弄り回したもの。フォロー0にしよう運動実施中",
      "url": "https://t.co/qsHm66HUHQ",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/qsHm66HUHQ",
              "expanded_url": "http://www.nicovideo.jp/watch/sm20939758",
              "display_url": "nicovideo.jp/watch/sm209397…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 83324,
      "friends_count": 13946,
      "listed_count": 2366,
      "created_at": "Sat Jan 04 20:02:18 +0000 2014",
      "favourites_count": 0,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 16762,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "131516",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/423091244672098305/b2wOJ9m8_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/423091244672098305/b2wOJ9m8_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2276591558/1401694160",
      "profile_link_color": "009999",
      "profile_sidebar_border_color": "EEEEEE",
      "profile_sidebar_fill_color": "EFEFEF",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 51,
    "favorite_count": 106,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:13:19 +0000 2017",
    "id": 830766736316063700,
    "id_str": "830766736316063744",
    "text": "タクミ対策してタクミが出なかったらそのキャラ腐るって、妄言では。",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://sites.google.com/site/yorufukurou/\" rel=\"nofollow\">YoruFukurou</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 14048302,
      "id_str": "14048302",
      "name": "FEH:0647075705",
      "screen_name": "berlysia",
      "location": "星見の塔/アンソーシャルネットワーク",
      "description": "麩菓子と柿の種チョコが好きです。ブラウザ周りでコードを書きます。",
      "url": "https://t.co/oR5e41WLvs",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/oR5e41WLvs",
              "expanded_url": "https://github.com/berlysia",
              "display_url": "github.com/berlysia",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1106,
      "friends_count": 976,
      "listed_count": 114,
      "created_at": "Wed Feb 27 11:18:28 +0000 2008",
      "favourites_count": 34403,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 119852,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme3/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme3/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/813225429884489728/Z5YUF_iD_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/813225429884489728/Z5YUF_iD_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/14048302/1400374303",
      "profile_link_color": "5656C0",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:19:05 +0000 2017",
    "id": 830768186391818200,
    "id_str": "830768186391818243",
    "text": "トールの可愛さわかる",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 477710702,
      "id_str": "477710702",
      "name": "川瀬拓実@フレンズ",
      "screen_name": "coil_msp123",
      "location": "Tokyo-to, Japan",
      "description": "東京理科大学応用物理４年 趣味プログラマ 電子工作少々 イギリス留学した 物性か量子コンピュータか脳の研究志望 アメリカの大学院行く 趣味アカはこちら→@coil_ver",
      "url": "https://t.co/I4QFl3GqAk",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/I4QFl3GqAk",
              "expanded_url": "http://coil398.hatenablog.com",
              "display_url": "coil398.hatenablog.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 344,
      "friends_count": 553,
      "listed_count": 12,
      "created_at": "Sun Jan 29 13:46:21 +0000 2012",
      "favourites_count": 5166,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 45950,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0099B9",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme4/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme4/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/782838371529830404/JyA4chKW_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/782838371529830404/JyA4chKW_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/477710702/1476424564",
      "profile_link_color": "ABB8C2",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "95E8EC",
      "profile_text_color": "3C3940",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:22:42 +0000 2017",
    "id": 830769097872863200,
    "id_str": "830769097872863232",
    "text": "RT @q0x0pq6x6p: 今日は『MENSHO』へ行きました！皆さんの顔が見られて本当に疲れも吹っ飛びました。てか本当に旨かったんです♡\n潮らーめんと挽きたて小麦つけ麺とうずら味玉を食べました。海の食材の味が一気に広がる潮らーめん。鴨の風味がしっかり味わえるつけ麺。どちら…",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "q0x0pq6x6p",
          "name": "岩間彩香",
          "id": 740197233467883500,
          "id_str": "740197233467883525",
          "indices": [
            3,
            14
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 172811444,
      "id_str": "172811444",
      "name": "庄野智治",
      "screen_name": "shono_menya",
      "location": "TOKYO",
      "description": "Ramen Creator/麺や庄の/GACHI/gotsubo/油そばGACHI/MENSHO TOKYO/麺や庄のLAZONA/M. T San Francisco/MENSHO/明日の一杯を創る‼︎",
      "url": "https://t.co/uOGOir0hvm",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/uOGOir0hvm",
              "expanded_url": "http://menya-shono.com/",
              "display_url": "menya-shono.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 3341,
      "friends_count": 276,
      "listed_count": 133,
      "created_at": "Fri Jul 30 17:30:56 +0000 2010",
      "favourites_count": 2957,
      "utc_offset": 32400,
      "time_zone": "Seoul",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 2625,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/534540014101606400/0l_fDaic_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/534540014101606400/0l_fDaic_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/172811444/1482077474",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Feb 12 10:33:27 +0000 2017",
      "id": 830726504401215500,
      "id_str": "830726504401215488",
      "text": "今日は『MENSHO』へ行きました！皆さんの顔が見られて本当に疲れも吹っ飛びました。てか本当に旨かったんです♡\n潮らーめんと挽きたて小麦つけ麺とうずら味玉を食べました。海の食材の味が一気に広がる潮らーめん。鴨の風味がしっかり味わえ… https://t.co/Jnpm4LGv4O",
      "truncated": true,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/Jnpm4LGv4O",
            "expanded_url": "https://twitter.com/i/web/status/830726504401215488",
            "display_url": "twitter.com/i/web/status/8…",
            "indices": [
              117,
              140
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 740197233467883500,
        "id_str": "740197233467883525",
        "name": "岩間彩香",
        "screen_name": "q0x0pq6x6p",
        "location": "六本木",
        "description": "らーめん屋になりたい🍜🍜",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 255,
        "friends_count": 246,
        "listed_count": 0,
        "created_at": "Tue Jun 07 15:02:27 +0000 2016",
        "favourites_count": 91,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 215,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/829378703247302657/Ke7G94bg_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/829378703247302657/Ke7G94bg_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/740197233467883525/1486892981",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 5,
      "favorite_count": 12,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 5,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:22:52 +0000 2017",
    "id": 830769141640417300,
    "id_str": "830769141640417280",
    "text": "@alt_seek ファッションガイジのことわざわざ晒すと思う？",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "alt_seek",
          "name": "進撃のガイジ",
          "id": 750362531433033700,
          "id_str": "750362531433033728",
          "indices": [
            0,
            9
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": 830762724783059000,
    "in_reply_to_status_id_str": "830762724783058946",
    "in_reply_to_user_id": 750362531433033700,
    "in_reply_to_user_id_str": "750362531433033728",
    "in_reply_to_screen_name": "alt_seek",
    "user": {
      "id": 3139140506,
      "id_str": "3139140506",
      "name": "香川真司",
      "screen_name": "senpai114comeon",
      "location": "",
      "description": "アーイキソ'sroom",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 79,
      "friends_count": 92,
      "listed_count": 1,
      "created_at": "Sat Apr 04 15:22:17 +0000 2015",
      "favourites_count": 428,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 2919,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/751300277869748224/wWtvgTKa_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/751300277869748224/wWtvgTKa_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/3139140506/1464824671",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:27:59 +0000 2017",
    "id": 830770426506670100,
    "id_str": "830770426506670080",
    "text": "RT @y_cute_: 今日は久しぶりに顔も髪もキメキメでお出かけしました。珍しくプリクラでの満面の笑みです、 https://t.co/4nQKWL8mfX",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "y_cute_",
          "name": "よきき",
          "id": 396497748,
          "id_str": "396497748",
          "indices": [
            3,
            11
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 830715661957488600,
          "id_str": "830715661957488640",
          "indices": [
            57,
            80
          ],
          "media_url": "http://pbs.twimg.com/media/C4dLfkRUYAACc5r.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4dLfkRUYAACc5r.jpg",
          "url": "https://t.co/4nQKWL8mfX",
          "display_url": "pic.twitter.com/4nQKWL8mfX",
          "expanded_url": "https://twitter.com/y_cute_/status/830715668781600769/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 855,
              "h": 1166,
              "resize": "fit"
            },
            "medium": {
              "w": 855,
              "h": 1166,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 499,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 830715668781600800,
          "source_status_id_str": "830715668781600769",
          "source_user_id": 396497748,
          "source_user_id_str": "396497748"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830715661957488600,
          "id_str": "830715661957488640",
          "indices": [
            57,
            80
          ],
          "media_url": "http://pbs.twimg.com/media/C4dLfkRUYAACc5r.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4dLfkRUYAACc5r.jpg",
          "url": "https://t.co/4nQKWL8mfX",
          "display_url": "pic.twitter.com/4nQKWL8mfX",
          "expanded_url": "https://twitter.com/y_cute_/status/830715668781600769/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 855,
              "h": 1166,
              "resize": "fit"
            },
            "medium": {
              "w": 855,
              "h": 1166,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 499,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 830715668781600800,
          "source_status_id_str": "830715668781600769",
          "source_user_id": 396497748,
          "source_user_id_str": "396497748"
        },
        {
          "id": 830715661957492700,
          "id_str": "830715661957492736",
          "indices": [
            57,
            80
          ],
          "media_url": "http://pbs.twimg.com/media/C4dLfkRUcAAzkl1.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4dLfkRUcAAzkl1.jpg",
          "url": "https://t.co/4nQKWL8mfX",
          "display_url": "pic.twitter.com/4nQKWL8mfX",
          "expanded_url": "https://twitter.com/y_cute_/status/830715668781600769/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 574,
              "h": 924,
              "resize": "fit"
            },
            "small": {
              "w": 422,
              "h": 680,
              "resize": "fit"
            },
            "large": {
              "w": 574,
              "h": 924,
              "resize": "fit"
            }
          },
          "source_status_id": 830715668781600800,
          "source_status_id_str": "830715668781600769",
          "source_user_id": 396497748,
          "source_user_id_str": "396497748"
        }
      ]
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 301304117,
      "id_str": "301304117",
      "name": "キスして子どもが出来るゆぶ",
      "screen_name": "amamariopianist",
      "location": "おきらく乱闘部屋",
      "description": "キスして子どもが出来たならキスする隙間もないくらい子どもが生まれる。",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 400,
      "friends_count": 409,
      "listed_count": 41,
      "created_at": "Thu May 19 07:31:29 +0000 2011",
      "favourites_count": 34549,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 812,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/450688113593950208/UexRRD-J.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/450688113593950208/UexRRD-J.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/827433742712991746/OfhswP0r_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/827433742712991746/OfhswP0r_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/301304117/1485379252",
      "profile_link_color": "0084B4",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Feb 12 09:50:24 +0000 2017",
      "id": 830715668781600800,
      "id_str": "830715668781600769",
      "text": "今日は久しぶりに顔も髪もキメキメでお出かけしました。珍しくプリクラでの満面の笑みです、 https://t.co/4nQKWL8mfX",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 830715661957488600,
            "id_str": "830715661957488640",
            "indices": [
              44,
              67
            ],
            "media_url": "http://pbs.twimg.com/media/C4dLfkRUYAACc5r.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4dLfkRUYAACc5r.jpg",
            "url": "https://t.co/4nQKWL8mfX",
            "display_url": "pic.twitter.com/4nQKWL8mfX",
            "expanded_url": "https://twitter.com/y_cute_/status/830715668781600769/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 855,
                "h": 1166,
                "resize": "fit"
              },
              "medium": {
                "w": 855,
                "h": 1166,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 499,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 830715661957488600,
            "id_str": "830715661957488640",
            "indices": [
              44,
              67
            ],
            "media_url": "http://pbs.twimg.com/media/C4dLfkRUYAACc5r.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4dLfkRUYAACc5r.jpg",
            "url": "https://t.co/4nQKWL8mfX",
            "display_url": "pic.twitter.com/4nQKWL8mfX",
            "expanded_url": "https://twitter.com/y_cute_/status/830715668781600769/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 855,
                "h": 1166,
                "resize": "fit"
              },
              "medium": {
                "w": 855,
                "h": 1166,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 499,
                "h": 680,
                "resize": "fit"
              }
            }
          },
          {
            "id": 830715661957492700,
            "id_str": "830715661957492736",
            "indices": [
              44,
              67
            ],
            "media_url": "http://pbs.twimg.com/media/C4dLfkRUcAAzkl1.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4dLfkRUcAAzkl1.jpg",
            "url": "https://t.co/4nQKWL8mfX",
            "display_url": "pic.twitter.com/4nQKWL8mfX",
            "expanded_url": "https://twitter.com/y_cute_/status/830715668781600769/photo/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 574,
                "h": 924,
                "resize": "fit"
              },
              "small": {
                "w": 422,
                "h": 680,
                "resize": "fit"
              },
              "large": {
                "w": 574,
                "h": 924,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 396497748,
        "id_str": "396497748",
        "name": "よきき",
        "screen_name": "y_cute_",
        "location": "歌舞伎町 BAR『Chrome/HEARTS』",
        "description": "病的に愛して メイク(ネタ)系youtuber お仕事のご依頼はy.cute.tube2@gmail.comにメールを、BARに来たい方は(@yc_sogo_)にDMで連絡ください！",
        "url": "https://t.co/KRnQDykmru",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/KRnQDykmru",
                "expanded_url": "https://www.youtube.com/channel/UCuA3GbcPjRPesHaeRIvfIIQ",
                "display_url": "youtube.com/channel/UCuA3G…",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 56017,
        "friends_count": 144,
        "listed_count": 359,
        "created_at": "Sun Oct 23 10:50:54 +0000 2011",
        "favourites_count": 20551,
        "utc_offset": 28800,
        "time_zone": "Irkutsk",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 8170,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000011023925/28e15a50422a8f83470a1d3c345c0719.jpeg",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000011023925/28e15a50422a8f83470a1d3c345c0719.jpeg",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/830362769664774145/y4hB9zrR_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/830362769664774145/y4hB9zrR_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/396497748/1483205336",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "FFFFFF",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 1434,
      "favorite_count": 8361,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 1434,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:28:23 +0000 2017",
    "id": 830770527534932000,
    "id_str": "830770527534931969",
    "text": "RT @magaiakashi: 最近の流行に乗ってみようと頑張る鳳翔お母さん。 https://t.co/wCH6KBldfn",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "magaiakashi",
          "name": "まがいあかし",
          "id": 1937991020,
          "id_str": "1937991020",
          "indices": [
            3,
            15
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 830765887460302800,
          "id_str": "830765887460302849",
          "indices": [
            41,
            64
          ],
          "media_url": "http://pbs.twimg.com/media/C4d5LE2VYAE_f5y.png",
          "media_url_https": "https://pbs.twimg.com/media/C4d5LE2VYAE_f5y.png",
          "url": "https://t.co/wCH6KBldfn",
          "display_url": "pic.twitter.com/wCH6KBldfn",
          "expanded_url": "https://twitter.com/magaiakashi/status/830765939104718848/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 860,
              "h": 1200,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 487,
              "h": 680,
              "resize": "fit"
            },
            "large": {
              "w": 1000,
              "h": 1395,
              "resize": "fit"
            }
          },
          "source_status_id": 830765939104718800,
          "source_status_id_str": "830765939104718848",
          "source_user_id": 1937991020,
          "source_user_id_str": "1937991020"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830765887460302800,
          "id_str": "830765887460302849",
          "indices": [
            41,
            64
          ],
          "media_url": "http://pbs.twimg.com/media/C4d5LE2VYAE_f5y.png",
          "media_url_https": "https://pbs.twimg.com/media/C4d5LE2VYAE_f5y.png",
          "url": "https://t.co/wCH6KBldfn",
          "display_url": "pic.twitter.com/wCH6KBldfn",
          "expanded_url": "https://twitter.com/magaiakashi/status/830765939104718848/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 860,
              "h": 1200,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 487,
              "h": 680,
              "resize": "fit"
            },
            "large": {
              "w": 1000,
              "h": 1395,
              "resize": "fit"
            }
          },
          "source_status_id": 830765939104718800,
          "source_status_id_str": "830765939104718848",
          "source_user_id": 1937991020,
          "source_user_id_str": "1937991020"
        },
        {
          "id": 830765904321355800,
          "id_str": "830765904321355777",
          "indices": [
            41,
            64
          ],
          "media_url": "http://pbs.twimg.com/media/C4d5MDqUoAErf5f.png",
          "media_url_https": "https://pbs.twimg.com/media/C4d5MDqUoAErf5f.png",
          "url": "https://t.co/wCH6KBldfn",
          "display_url": "pic.twitter.com/wCH6KBldfn",
          "expanded_url": "https://twitter.com/magaiakashi/status/830765939104718848/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 907,
              "h": 1200,
              "resize": "fit"
            },
            "small": {
              "w": 514,
              "h": 680,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 1000,
              "h": 1323,
              "resize": "fit"
            }
          },
          "source_status_id": 830765939104718800,
          "source_status_id_str": "830765939104718848",
          "source_user_id": 1937991020,
          "source_user_id_str": "1937991020"
        },
        {
          "id": 830765917244055600,
          "id_str": "830765917244055552",
          "indices": [
            41,
            64
          ],
          "media_url": "http://pbs.twimg.com/media/C4d5MzzVYAArEzA.png",
          "media_url_https": "https://pbs.twimg.com/media/C4d5MzzVYAArEzA.png",
          "url": "https://t.co/wCH6KBldfn",
          "display_url": "pic.twitter.com/wCH6KBldfn",
          "expanded_url": "https://twitter.com/magaiakashi/status/830765939104718848/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 456,
              "h": 680,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 805,
              "h": 1200,
              "resize": "fit"
            },
            "large": {
              "w": 1000,
              "h": 1491,
              "resize": "fit"
            }
          },
          "source_status_id": 830765939104718800,
          "source_status_id_str": "830765939104718848",
          "source_user_id": 1937991020,
          "source_user_id_str": "1937991020"
        }
      ]
    },
    "source": "<a href=\"http://janetter.net/\" rel=\"nofollow\">Janetter Pro for Mac</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 5539982,
      "id_str": "5539982",
      "name": "竹田",
      "screen_name": "takets",
      "location": "東京都国分寺市",
      "description": "恋と革命のために生きています。嘘。というのが嘘。",
      "url": "http://t.co/9XaDXgnzpb",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/9XaDXgnzpb",
              "expanded_url": "http://meganemusume.net/",
              "display_url": "meganemusume.net",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 952,
      "friends_count": 229,
      "listed_count": 85,
      "created_at": "Thu Apr 26 22:37:47 +0000 2007",
      "favourites_count": 2255,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 46864,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Feb 12 13:10:09 +0000 2017",
      "id": 830765939104718800,
      "id_str": "830765939104718848",
      "text": "最近の流行に乗ってみようと頑張る鳳翔お母さん。 https://t.co/wCH6KBldfn",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 830765887460302800,
            "id_str": "830765887460302849",
            "indices": [
              24,
              47
            ],
            "media_url": "http://pbs.twimg.com/media/C4d5LE2VYAE_f5y.png",
            "media_url_https": "https://pbs.twimg.com/media/C4d5LE2VYAE_f5y.png",
            "url": "https://t.co/wCH6KBldfn",
            "display_url": "pic.twitter.com/wCH6KBldfn",
            "expanded_url": "https://twitter.com/magaiakashi/status/830765939104718848/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 860,
                "h": 1200,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 487,
                "h": 680,
                "resize": "fit"
              },
              "large": {
                "w": 1000,
                "h": 1395,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 830765887460302800,
            "id_str": "830765887460302849",
            "indices": [
              24,
              47
            ],
            "media_url": "http://pbs.twimg.com/media/C4d5LE2VYAE_f5y.png",
            "media_url_https": "https://pbs.twimg.com/media/C4d5LE2VYAE_f5y.png",
            "url": "https://t.co/wCH6KBldfn",
            "display_url": "pic.twitter.com/wCH6KBldfn",
            "expanded_url": "https://twitter.com/magaiakashi/status/830765939104718848/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 860,
                "h": 1200,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 487,
                "h": 680,
                "resize": "fit"
              },
              "large": {
                "w": 1000,
                "h": 1395,
                "resize": "fit"
              }
            }
          },
          {
            "id": 830765904321355800,
            "id_str": "830765904321355777",
            "indices": [
              24,
              47
            ],
            "media_url": "http://pbs.twimg.com/media/C4d5MDqUoAErf5f.png",
            "media_url_https": "https://pbs.twimg.com/media/C4d5MDqUoAErf5f.png",
            "url": "https://t.co/wCH6KBldfn",
            "display_url": "pic.twitter.com/wCH6KBldfn",
            "expanded_url": "https://twitter.com/magaiakashi/status/830765939104718848/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 907,
                "h": 1200,
                "resize": "fit"
              },
              "small": {
                "w": 514,
                "h": 680,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1000,
                "h": 1323,
                "resize": "fit"
              }
            }
          },
          {
            "id": 830765917244055600,
            "id_str": "830765917244055552",
            "indices": [
              24,
              47
            ],
            "media_url": "http://pbs.twimg.com/media/C4d5MzzVYAArEzA.png",
            "media_url_https": "https://pbs.twimg.com/media/C4d5MzzVYAArEzA.png",
            "url": "https://t.co/wCH6KBldfn",
            "display_url": "pic.twitter.com/wCH6KBldfn",
            "expanded_url": "https://twitter.com/magaiakashi/status/830765939104718848/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 456,
                "h": 680,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 805,
                "h": 1200,
                "resize": "fit"
              },
              "large": {
                "w": 1000,
                "h": 1491,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1937991020,
        "id_str": "1937991020",
        "name": "まがいあかし",
        "screen_name": "magaiakashi",
        "location": "M県S市",
        "description": "遅筆ながらも必死に絵を描きます。まったりご覧ください。ニコニコ静画はじめました。→ https://t.co/yRKhmryGw1",
        "url": "https://t.co/gKIvGaJ3bv",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/gKIvGaJ3bv",
                "expanded_url": "http://www.pixiv.net/member.php?id=8573374",
                "display_url": "pixiv.net/member.php?id=…",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": [
              {
                "url": "https://t.co/yRKhmryGw1",
                "expanded_url": "http://sp.seiga.nicovideo.jp/user/illust/52394538",
                "display_url": "sp.seiga.nicovideo.jp/user/illust/52…",
                "indices": [
                  42,
                  65
                ]
              }
            ]
          }
        },
        "protected": false,
        "followers_count": 6617,
        "friends_count": 277,
        "listed_count": 235,
        "created_at": "Sat Oct 05 15:34:43 +0000 2013",
        "favourites_count": 889,
        "utc_offset": 28800,
        "time_zone": "Irkutsk",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 5206,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "000000",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/823588132322803713/p-VYcGxV_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/823588132322803713/p-VYcGxV_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1937991020/1486057605",
        "profile_link_color": "4A913C",
        "profile_sidebar_border_color": "000000",
        "profile_sidebar_fill_color": "000000",
        "profile_text_color": "000000",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 2870,
      "favorite_count": 4452,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 2870,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:28:39 +0000 2017",
    "id": 830770595612667900,
    "id_str": "830770595612667904",
    "text": "ひさしぶりにぶろるっく見てみたら被ブロめっちゃ増えてたんだけど俺なにか悪いことしたか？",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2912472632,
      "id_str": "2912472632",
      "name": "Kojitetsu.",
      "screen_name": "kojitetsu10",
      "location": "東京理大SJ（魂心家キャンパス）",
      "description": "一つの闘いの終わりはまた一つの闘いの始まりでもある。",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 317,
      "friends_count": 408,
      "listed_count": 5,
      "created_at": "Fri Nov 28 06:37:39 +0000 2014",
      "favourites_count": 3851,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 6038,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/824473119033167873/9_LLb573_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/824473119033167873/9_LLb573_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2912472632/1485405857",
      "profile_link_color": "981CEB",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:28:39 +0000 2017",
    "id": 830770596912918500,
    "id_str": "830770596912918532",
    "text": "CIみてると心が病む",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 135861531,
      "id_str": "135861531",
      "name": "kyasbal",
      "screen_name": "kyasbal_1994",
      "location": "",
      "description": "WebGL/Node.js    未踏2016 Grimoire.js開発者",
      "url": "https://t.co/rIxxaN4fqz",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/rIxxaN4fqz",
              "expanded_url": "http://github.com/kyasbal-1994",
              "display_url": "github.com/kyasbal-1994",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 332,
      "friends_count": 194,
      "listed_count": 20,
      "created_at": "Thu Apr 22 12:18:21 +0000 2010",
      "favourites_count": 3009,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 9544,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0033FF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/135861531/1431678704",
      "profile_link_color": "4A913C",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:31:16 +0000 2017",
    "id": 830771254068011000,
    "id_str": "830771254068011008",
    "text": "(  ；´。 ｀；)ふぁぼは25分ごと5分の休憩を挟む、ポモドーロスタイルで実行するのが効率的ふぁぼ。ふぁぼは遊びではないので、持続可能性こそをなによりも意識しているふぁぼ。",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://janetter.net/\" rel=\"nofollow\">Janetter Pro for Mac</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 5539982,
      "id_str": "5539982",
      "name": "竹田",
      "screen_name": "takets",
      "location": "東京都国分寺市",
      "description": "恋と革命のために生きています。嘘。というのが嘘。",
      "url": "http://t.co/9XaDXgnzpb",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/9XaDXgnzpb",
              "expanded_url": "http://meganemusume.net/",
              "display_url": "meganemusume.net",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 952,
      "friends_count": 229,
      "listed_count": 85,
      "created_at": "Thu Apr 26 22:37:47 +0000 2007",
      "favourites_count": 2255,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 46864,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 2,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:31:43 +0000 2017",
    "id": 830771364806004700,
    "id_str": "830771364806004737",
    "text": "Mマスアニメ化すげえな",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://covelline.com/feather/\" rel=\"nofollow\">feather for iOS </a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1694085883,
      "id_str": "1694085883",
      "name": "ひゆーが@青空のラプソディ",
      "screen_name": "yryr_jump",
      "location": "",
      "description": "とあるキモオタ大学に入りますますゆるゆりとデレマスに染まっていく毎日楽しい✌('ω'✌ )三✌('ω')✌三( ✌'ω')✌",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 172,
      "friends_count": 202,
      "listed_count": 5,
      "created_at": "Fri Aug 23 14:57:26 +0000 2013",
      "favourites_count": 2679,
      "utc_offset": 28800,
      "time_zone": "Irkutsk",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 10642,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/781931965331025920/rlQAjPnc_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/781931965331025920/rlQAjPnc_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1694085883/1486873960",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:32:01 +0000 2017",
    "id": 830771440836177900,
    "id_str": "830771440836177921",
    "text": "オレ腐女、これほんと最高で、コスプレさせてるシーンでガッツポーズ取っちゃったよ。あんまりシリアスすぎないのも個人的に良いです。最高すぎてフラッパー定期購読がやめられないわ… https://t.co/GCLkb79aTB",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/GCLkb79aTB",
          "expanded_url": "https://twitter.com/tabunnnem/status/821342790504222720",
          "display_url": "twitter.com/tabunnnem/stat…",
          "indices": [
            87,
            110
          ]
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2339986518,
      "id_str": "2339986518",
      "name": "多分",
      "screen_name": "tabunnnem",
      "location": "",
      "description": "ガルパンおじさん、成年、プロフィール画像は@Taka_yuno31 さんに描いていただいたオコジョアキちゃんです(私は絵師でない)、最近は幼女戦記にお熱",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 29,
      "friends_count": 57,
      "listed_count": 3,
      "created_at": "Wed Feb 12 08:34:12 +0000 2014",
      "favourites_count": 30,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 108,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0084B4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/570927016745000960/mV06bpRK.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/570927016745000960/mV06bpRK.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/785458250984542213/fmFPcOBD_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/785458250984542213/fmFPcOBD_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2339986518/1454686227",
      "profile_link_color": "000000",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": true,
    "quoted_status_id": 821342790504222700,
    "quoted_status_id_str": "821342790504222720",
    "quoted_status": {
      "created_at": "Tue Jan 17 13:05:55 +0000 2017",
      "id": 821342790504222700,
      "id_str": "821342790504222720",
      "text": "1,2巻ポチった\nオレが腐女子でアイツが百合オタで (1) (MFコミックス フラッパーシリーズ)   アジイチ https://t.co/G8fSrDXOub @amazonJPさんから",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "AmazonJP",
            "name": "Amazon.co.jp (アマゾン)",
            "id": 161616614,
            "id_str": "161616614",
            "indices": [
              81,
              90
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/G8fSrDXOub",
            "expanded_url": "https://www.amazon.co.jp/dp/4040682866/ref=cm_sw_r_tw_dp_x_CAHFybCKDEXRN",
            "display_url": "amazon.co.jp/dp/4040682866/…",
            "indices": [
              57,
              80
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 2339986518,
        "id_str": "2339986518",
        "name": "多分",
        "screen_name": "tabunnnem",
        "location": "",
        "description": "ガルパンおじさん、成年、プロフィール画像は@Taka_yuno31 さんに描いていただいたオコジョアキちゃんです(私は絵師でない)、最近は幼女戦記にお熱",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 29,
        "friends_count": 57,
        "listed_count": 3,
        "created_at": "Wed Feb 12 08:34:12 +0000 2014",
        "favourites_count": 30,
        "utc_offset": -28800,
        "time_zone": "Pacific Time (US & Canada)",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 108,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "0084B4",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/570927016745000960/mV06bpRK.png",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/570927016745000960/mV06bpRK.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/785458250984542213/fmFPcOBD_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/785458250984542213/fmFPcOBD_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2339986518/1454686227",
        "profile_link_color": "000000",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": true,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 1,
      "favorite_count": 2,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:33:41 +0000 2017",
    "id": 830771860883124200,
    "id_str": "830771860883124224",
    "text": "ウメちゃんの意気込みに答えるだけのパワーがキャラ側になかった。それだけ",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 3167204815,
      "id_str": "3167204815",
      "name": "Keita@結局アレックス頑張る",
      "screen_name": "so_good_Xeno",
      "location": "",
      "description": "まったりひっそりと。東京理科大学生。スト5アレックス。 ellegarden馬鹿でもある。",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 46,
      "friends_count": 187,
      "listed_count": 0,
      "created_at": "Wed Apr 22 10:38:53 +0000 2015",
      "favourites_count": 136,
      "utc_offset": 28800,
      "time_zone": "Irkutsk",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 5606,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/662555848900636675/LxCcC-fQ_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/662555848900636675/LxCcC-fQ_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/3167204815/1453997238",
      "profile_link_color": "3B94D9",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:33:58 +0000 2017",
    "id": 830771933411094500,
    "id_str": "830771933411094528",
    "text": "未踏終わったらもう一回ぐらいスノボしたい",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://covelline.com/feather/\" rel=\"nofollow\">feather for iOS</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 135861531,
      "id_str": "135861531",
      "name": "kyasbal",
      "screen_name": "kyasbal_1994",
      "location": "",
      "description": "WebGL/Node.js    未踏2016 Grimoire.js開発者",
      "url": "https://t.co/rIxxaN4fqz",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/rIxxaN4fqz",
              "expanded_url": "http://github.com/kyasbal-1994",
              "display_url": "github.com/kyasbal-1994",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 332,
      "friends_count": 194,
      "listed_count": 20,
      "created_at": "Thu Apr 22 12:18:21 +0000 2010",
      "favourites_count": 3009,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 9544,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0033FF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/135861531/1431678704",
      "profile_link_color": "4A913C",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 2,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:34:53 +0000 2017",
    "id": 830772164940877800,
    "id_str": "830772164940877825",
    "text": "関東ゲーム制作部さん、今日もくもく会だったんですねー。知らなかった……。次タイミング合えば、行きたいところです。",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:36:55 +0000 2017",
    "id": 830772677421912000,
    "id_str": "830772677421912065",
    "text": "深夜に発生した強烈な野菜食べたい欲をどうしたらいいのだろう。",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://www.apple.com/\" rel=\"nofollow\">OS X</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 5539982,
      "id_str": "5539982",
      "name": "竹田",
      "screen_name": "takets",
      "location": "東京都国分寺市",
      "description": "恋と革命のために生きています。嘘。というのが嘘。",
      "url": "http://t.co/9XaDXgnzpb",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/9XaDXgnzpb",
              "expanded_url": "http://meganemusume.net/",
              "display_url": "meganemusume.net",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 952,
      "friends_count": 229,
      "listed_count": 85,
      "created_at": "Thu Apr 26 22:37:47 +0000 2007",
      "favourites_count": 2255,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 46864,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:37:26 +0000 2017",
    "id": 830772807474647000,
    "id_str": "830772807474647041",
    "text": "プリリズ観終わったから6月のキンプリが楽しみでしょうがない🙆",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://covelline.com/feather/\" rel=\"nofollow\">feather for iOS</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2400816728,
      "id_str": "2400816728",
      "name": "のんけ",
      "screen_name": "neruneru_shota",
      "location": "秋葉原に近い大学",
      "description": "アスペお断り垢",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 144,
      "friends_count": 269,
      "listed_count": 6,
      "created_at": "Fri Mar 21 02:47:55 +0000 2014",
      "favourites_count": 15281,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 16910,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/806314985571762176/uoMdcETq_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/806314985571762176/uoMdcETq_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2400816728/1444575566",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:39:39 +0000 2017",
    "id": 830773363098280000,
    "id_str": "830773363098279937",
    "text": "オーフェンが読み放題になる時代か……（困惑） https://t.co/tzPGr5pD7i",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/tzPGr5pD7i",
          "expanded_url": "https://twitter.com/Wslash/status/830772861853773824",
          "display_url": "twitter.com/Wslash/status/…",
          "indices": [
            23,
            46
          ]
        }
      ]
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 5539982,
      "id_str": "5539982",
      "name": "竹田",
      "screen_name": "takets",
      "location": "東京都国分寺市",
      "description": "恋と革命のために生きています。嘘。というのが嘘。",
      "url": "http://t.co/9XaDXgnzpb",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/9XaDXgnzpb",
              "expanded_url": "http://meganemusume.net/",
              "display_url": "meganemusume.net",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 952,
      "friends_count": 229,
      "listed_count": 85,
      "created_at": "Thu Apr 26 22:37:47 +0000 2007",
      "favourites_count": 2255,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 46864,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": true,
    "quoted_status_id": 830772861853773800,
    "quoted_status_id_str": "830772861853773824",
    "quoted_status": {
      "created_at": "Sun Feb 12 13:37:39 +0000 2017",
      "id": 830772861853773800,
      "id_str": "830772861853773824",
      "text": "「魔術士オーフェンはぐれ旅」の全巻セットはセール対象品ではありませんが「Kindle Unlimited」対象なので、Kindle Unlimited入っている人は読めます。\n\nhttps://t.co/RzqvxCk4mp",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/RzqvxCk4mp",
            "expanded_url": "https://www.amazon.co.jp/gp/product/B00UV6MYIY?tag=hatena-b-22",
            "display_url": "amazon.co.jp/gp/product/B00…",
            "indices": [
              89,
              112
            ]
          }
        ]
      },
      "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 6935292,
        "id_str": "6935292",
        "name": "横田真俊",
        "screen_name": "Wslash",
        "location": "Tokyo",
        "description": "さくらインターネットのエバンジェリスト。個人活動として、FacebookやTwitter、クラウド本の執筆なども行っています。詳細はURL先をご覧下さい。",
        "url": "https://t.co/o5gXubVJGV",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/o5gXubVJGV",
                "expanded_url": "https://wslash.com/?page_id=2",
                "display_url": "wslash.com/?page_id=2",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 3651,
        "friends_count": 894,
        "listed_count": 417,
        "created_at": "Tue Jun 19 16:12:37 +0000 2007",
        "favourites_count": 17135,
        "utc_offset": 32400,
        "time_zone": "Tokyo",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 60275,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/2623047738/pv71scbsft1elyc73vt7_normal.gif",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/2623047738/pv71scbsft1elyc73vt7_normal.gif",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/6935292/1347978778",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 1,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:39:42 +0000 2017",
    "id": 830773374867509200,
    "id_str": "830773374867509250",
    "text": "お兄ちゃん…ソースの長さ以前に、その関数一つの行数に危機感を覚えたりしないの？",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twittbot.net/\" rel=\"nofollow\">twittbot.net</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 493279568,
      "id_str": "493279568",
      "name": "プログラムを勉強している人の毒舌な妹",
      "screen_name": "PG_sister_bot",
      "location": "192.168.0.2",
      "description": "趣味で、仕事で、学校でプログラムを勉強している人の毒舌な妹bot。ハッシュタグ #プログラムを勉強している人の毒舌な妹bot で、良いネタがあれば追加する方向で。作者:@big_bros アイコン提供:すつるむ(@sutsurumu)さん",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 10496,
      "friends_count": 7842,
      "listed_count": 552,
      "created_at": "Wed Feb 15 16:47:14 +0000 2012",
      "favourites_count": 1,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 74494,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1887861869/PG_sister_bot_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1887861869/PG_sister_bot_normal.png",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:40:31 +0000 2017",
    "id": 830773581143347200,
    "id_str": "830773581143347201",
    "text": "イカ体験できるならスイッチ先に買うのもありなのか",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://d.hatena.ne.jp/ABS104a/\" rel=\"nofollow\">Biyon Lite</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2252222857,
      "id_str": "2252222857",
      "name": "シス",
      "screen_name": "aplysia0",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 116,
      "friends_count": 146,
      "listed_count": 1,
      "created_at": "Wed Dec 18 16:17:22 +0000 2013",
      "favourites_count": 13052,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 53789,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2252222857/1432711472",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:42:02 +0000 2017",
    "id": 830773964280455200,
    "id_str": "830773964280455170",
    "text": "Emacsでのgolang開発環境がだいたいできたので、本日はここまで。基本さん構造の記法もけっこう違うため、fizzbuzzでも書いて身に付けようかしら。",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 5539982,
      "id_str": "5539982",
      "name": "竹田",
      "screen_name": "takets",
      "location": "東京都国分寺市",
      "description": "恋と革命のために生きています。嘘。というのが嘘。",
      "url": "http://t.co/9XaDXgnzpb",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/9XaDXgnzpb",
              "expanded_url": "http://meganemusume.net/",
              "display_url": "meganemusume.net",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 952,
      "friends_count": 229,
      "listed_count": 85,
      "created_at": "Thu Apr 26 22:37:47 +0000 2007",
      "favourites_count": 2255,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 46864,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:42:22 +0000 2017",
    "id": 830774045373116400,
    "id_str": "830774045373116419",
    "text": "速水ヒロ生誕祭スペシャルサイトとかいうの見つけて草生える",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://covelline.com/feather/\" rel=\"nofollow\">feather for iOS</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2400816728,
      "id_str": "2400816728",
      "name": "のんけ",
      "screen_name": "neruneru_shota",
      "location": "秋葉原に近い大学",
      "description": "アスペお断り垢",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 144,
      "friends_count": 269,
      "listed_count": 6,
      "created_at": "Fri Mar 21 02:47:55 +0000 2014",
      "favourites_count": 15281,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 16910,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/806314985571762176/uoMdcETq_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/806314985571762176/uoMdcETq_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2400816728/1444575566",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:43:00 +0000 2017",
    "id": 830774206862233600,
    "id_str": "830774206862233602",
    "text": "@wakameeeees は？？？",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "wakameeeees",
          "name": "かいぞー",
          "id": 1515785034,
          "id_str": "1515785034",
          "indices": [
            0,
            12
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://d.hatena.ne.jp/ABS104a/\" rel=\"nofollow\">Biyon Lite</a>",
    "in_reply_to_status_id": 830682888337186800,
    "in_reply_to_status_id_str": "830682888337186816",
    "in_reply_to_user_id": 1515785034,
    "in_reply_to_user_id_str": "1515785034",
    "in_reply_to_screen_name": "wakameeeees",
    "user": {
      "id": 2252222857,
      "id_str": "2252222857",
      "name": "シス",
      "screen_name": "aplysia0",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 116,
      "friends_count": 146,
      "listed_count": 1,
      "created_at": "Wed Dec 18 16:17:22 +0000 2013",
      "favourites_count": 13052,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 53789,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2252222857/1432711472",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:43:18 +0000 2017",
    "id": 830774283609612300,
    "id_str": "830774283609612292",
    "text": "誰もふぁぼってはならぬ。",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 5539982,
      "id_str": "5539982",
      "name": "竹田",
      "screen_name": "takets",
      "location": "東京都国分寺市",
      "description": "恋と革命のために生きています。嘘。というのが嘘。",
      "url": "http://t.co/9XaDXgnzpb",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/9XaDXgnzpb",
              "expanded_url": "http://meganemusume.net/",
              "display_url": "meganemusume.net",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 952,
      "friends_count": 229,
      "listed_count": 85,
      "created_at": "Thu Apr 26 22:37:47 +0000 2007",
      "favourites_count": 2255,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 46864,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/3557087890/4861c496a0ea81a19b2e3db16b015f1a_normal.jpeg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:45:39 +0000 2017",
    "id": 830774874436087800,
    "id_str": "830774874436087809",
    "text": "RT @nitikapo: FEifはこういうゲームです https://t.co/UrrDvcewAe",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "nitikapo",
          "name": "ふにちか",
          "id": 115055017,
          "id_str": "115055017",
          "indices": [
            3,
            12
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 830771956869849100,
          "id_str": "830771956869849088",
          "indices": [
            29,
            52
          ],
          "media_url": "http://pbs.twimg.com/media/C4d-sXKVYAAXxaP.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4d-sXKVYAAXxaP.jpg",
          "url": "https://t.co/UrrDvcewAe",
          "display_url": "pic.twitter.com/UrrDvcewAe",
          "expanded_url": "https://twitter.com/nitikapo/status/830771989384040448/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 1111,
              "h": 2048,
              "resize": "fit"
            },
            "small": {
              "w": 369,
              "h": 680,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 651,
              "h": 1200,
              "resize": "fit"
            }
          },
          "source_status_id": 830771989384040400,
          "source_status_id_str": "830771989384040448",
          "source_user_id": 115055017,
          "source_user_id_str": "115055017"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830771956869849100,
          "id_str": "830771956869849088",
          "indices": [
            29,
            52
          ],
          "media_url": "http://pbs.twimg.com/media/C4d-sXKVYAAXxaP.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4d-sXKVYAAXxaP.jpg",
          "url": "https://t.co/UrrDvcewAe",
          "display_url": "pic.twitter.com/UrrDvcewAe",
          "expanded_url": "https://twitter.com/nitikapo/status/830771989384040448/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 1111,
              "h": 2048,
              "resize": "fit"
            },
            "small": {
              "w": 369,
              "h": 680,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 651,
              "h": 1200,
              "resize": "fit"
            }
          },
          "source_status_id": 830771989384040400,
          "source_status_id_str": "830771989384040448",
          "source_user_id": 115055017,
          "source_user_id_str": "115055017"
        }
      ]
    },
    "source": "<a href=\"http://covelline.com/feather/\" rel=\"nofollow\">feather for iOS</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 14048302,
      "id_str": "14048302",
      "name": "FEH:0647075705",
      "screen_name": "berlysia",
      "location": "星見の塔/アンソーシャルネットワーク",
      "description": "麩菓子と柿の種チョコが好きです。ブラウザ周りでコードを書きます。",
      "url": "https://t.co/oR5e41WLvs",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/oR5e41WLvs",
              "expanded_url": "https://github.com/berlysia",
              "display_url": "github.com/berlysia",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1106,
      "friends_count": 976,
      "listed_count": 114,
      "created_at": "Wed Feb 27 11:18:28 +0000 2008",
      "favourites_count": 34403,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 119852,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme3/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme3/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/813225429884489728/Z5YUF_iD_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/813225429884489728/Z5YUF_iD_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/14048302/1400374303",
      "profile_link_color": "5656C0",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Feb 12 13:34:11 +0000 2017",
      "id": 830771989384040400,
      "id_str": "830771989384040448",
      "text": "FEifはこういうゲームです https://t.co/UrrDvcewAe",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 830771956869849100,
            "id_str": "830771956869849088",
            "indices": [
              15,
              38
            ],
            "media_url": "http://pbs.twimg.com/media/C4d-sXKVYAAXxaP.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4d-sXKVYAAXxaP.jpg",
            "url": "https://t.co/UrrDvcewAe",
            "display_url": "pic.twitter.com/UrrDvcewAe",
            "expanded_url": "https://twitter.com/nitikapo/status/830771989384040448/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 1111,
                "h": 2048,
                "resize": "fit"
              },
              "small": {
                "w": 369,
                "h": 680,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 651,
                "h": 1200,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 830771956869849100,
            "id_str": "830771956869849088",
            "indices": [
              15,
              38
            ],
            "media_url": "http://pbs.twimg.com/media/C4d-sXKVYAAXxaP.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4d-sXKVYAAXxaP.jpg",
            "url": "https://t.co/UrrDvcewAe",
            "display_url": "pic.twitter.com/UrrDvcewAe",
            "expanded_url": "https://twitter.com/nitikapo/status/830771989384040448/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 1111,
                "h": 2048,
                "resize": "fit"
              },
              "small": {
                "w": 369,
                "h": 680,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 651,
                "h": 1200,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 115055017,
        "id_str": "115055017",
        "name": "ふにちか",
        "screen_name": "nitikapo",
        "location": "",
        "description": "漫画描いてます。なにかご連絡などがあれば gemeren@yahoo.co.jp またはＤＭ、pixivのダイレクトメッセージでお願いします",
        "url": "https://t.co/zwefSDBQTy",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/zwefSDBQTy",
                "expanded_url": "http://funnyrocket.web.fc2.com/",
                "display_url": "funnyrocket.web.fc2.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 23725,
        "friends_count": 194,
        "listed_count": 673,
        "created_at": "Wed Feb 17 13:28:48 +0000 2010",
        "favourites_count": 31,
        "utc_offset": 32400,
        "time_zone": "Tokyo",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 59256,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/518406721258016768/MacLQsHK_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/518406721258016768/MacLQsHK_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/115055017/1444612998",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 383,
      "favorite_count": 379,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 383,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:52:00 +0000 2017",
    "id": 830776473078227000,
    "id_str": "830776473078226944",
    "text": "『SILENTWORLD』発売中です！ https://t.co/mWL9BCaRkE",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/mWL9BCaRkE",
          "expanded_url": "http://amzn.to/2kqYM0k",
          "display_url": "amzn.to/2kqYM0k",
          "indices": [
            20,
            43
          ]
        }
      ]
    },
    "source": "<a href=\"http://blank-note.sakura.ne.jp/\" rel=\"nofollow\">Saionji Tweet System</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 125089679,
      "id_str": "125089679",
      "name": "アリエス@ISLANDvita版2/23",
      "screen_name": "aries_bot",
      "location": "ひまわり",
      "description": "アリエスです。さいきんいそがしいので、アリエスの代わりになるBOTつくってます。ISLAND vita版2017年2月23日発売です！アニメも作ってます！（使い方：https://t.co/DG7A60zE6y）",
      "url": "https://t.co/aeyTXdpGL9",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/aeyTXdpGL9",
              "expanded_url": "http://blank-note.sakura.ne.jp/",
              "display_url": "blank-note.sakura.ne.jp",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            {
              "url": "https://t.co/DG7A60zE6y",
              "expanded_url": "http://blank-note.sakura.ne.jp/topics/aries_bot.html",
              "display_url": "blank-note.sakura.ne.jp/topics/aries_b…",
              "indices": [
                82,
                105
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 2988,
      "friends_count": 2967,
      "listed_count": 79,
      "created_at": "Sun Mar 21 17:05:47 +0000 2010",
      "favourites_count": 1,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 79595,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "9AE4E8",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme16/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme16/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/593795234397429761/QjYE74h9_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/593795234397429761/QjYE74h9_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/125089679/1430407112",
      "profile_link_color": "0084B4",
      "profile_sidebar_border_color": "BDDCAD",
      "profile_sidebar_fill_color": "DDFFCC",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:52:14 +0000 2017",
    "id": 830776530305290200,
    "id_str": "830776530305290240",
    "text": "湯たんぽの既視感が解決しました！\nミレニアム・ファルコン号ですわ https://t.co/oBs25JESex",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [],
      "media": [
        {
          "id": 830776518364196900,
          "id_str": "830776518364196871",
          "indices": [
            33,
            56
          ],
          "media_url": "http://pbs.twimg.com/media/C4eC14DVcAc08m0.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4eC14DVcAc08m0.jpg",
          "url": "https://t.co/oBs25JESex",
          "display_url": "pic.twitter.com/oBs25JESex",
          "expanded_url": "https://twitter.com/mochi_Flappe/status/830776530305290240/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 680,
              "h": 510,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 900,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 2048,
              "h": 1536,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830776518364196900,
          "id_str": "830776518364196871",
          "indices": [
            33,
            56
          ],
          "media_url": "http://pbs.twimg.com/media/C4eC14DVcAc08m0.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4eC14DVcAc08m0.jpg",
          "url": "https://t.co/oBs25JESex",
          "display_url": "pic.twitter.com/oBs25JESex",
          "expanded_url": "https://twitter.com/mochi_Flappe/status/830776530305290240/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 680,
              "h": 510,
              "resize": "fit"
            },
            "medium": {
              "w": 1200,
              "h": 900,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 2048,
              "h": 1536,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 494897785,
      "id_str": "494897785",
      "name": "もち",
      "screen_name": "mochi_Flappe",
      "location": "(ﾉ)･ω･(ヾ)",
      "description": "Markup Engineer - 格ゲー動画勢。トラック提督。ペットはヤマトヌマエビ。",
      "url": "http://t.co/b18LDiJX85",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/b18LDiJX85",
              "expanded_url": "http://mochiflappe.hatenablog.com",
              "display_url": "mochiflappe.hatenablog.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 564,
      "friends_count": 1376,
      "listed_count": 16,
      "created_at": "Fri Feb 17 11:24:27 +0000 2012",
      "favourites_count": 1954,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 5273,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "30C1DB",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830707220232888321/qv6s2X-P.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830707220232888321/qv6s2X-P.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/439073624650039296/GuiC9i7l_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/439073624650039296/GuiC9i7l_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/494897785/1371031258",
      "profile_link_color": "0084B4",
      "profile_sidebar_border_color": "BDDCAD",
      "profile_sidebar_fill_color": "DDFFCC",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 3,
    "favorite_count": 2,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:53:26 +0000 2017",
    "id": 830776831552811000,
    "id_str": "830776831552811008",
    "text": "RT @rigaku_daisuki: ｢子供のころ毎晩神様に自転車をくださいって祈ってたんだけど、それじゃダメだと気づいて、自転車を盗んでから神に許しを願った。｣",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "rigaku_daisuki",
          "name": "東京理科大学理学部第三部",
          "id": 815763021423255600,
          "id_str": "815763021423255557",
          "indices": [
            3,
            18
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1704308238,
      "id_str": "1704308238",
      "name": "むーさん",
      "screen_name": "Physics_OSK",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 419,
      "friends_count": 272,
      "listed_count": 6,
      "created_at": "Tue Aug 27 10:33:31 +0000 2013",
      "favourites_count": 4291,
      "utc_offset": 28800,
      "time_zone": "Irkutsk",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 8611,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/759569311178461184/gUxvGssZ_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/759569311178461184/gUxvGssZ_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1704308238/1470761035",
      "profile_link_color": "1B95E0",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Tue Jan 17 06:22:13 +0000 2017",
      "id": 821241194961256400,
      "id_str": "821241194961256448",
      "text": "｢子供のころ毎晩神様に自転車をくださいって祈ってたんだけど、それじゃダメだと気づいて、自転車を盗んでから神に許しを願った。｣",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": []
      },
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 815763021423255600,
        "id_str": "815763021423255557",
        "name": "東京理科大学理学部第三部",
        "screen_name": "rigaku_daisuki",
        "location": "我等の集いし各々地にて",
        "description": "神楽坂の幻",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 20,
        "friends_count": 19,
        "listed_count": 0,
        "created_at": "Mon Jan 02 03:33:55 +0000 2017",
        "favourites_count": 81,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 48,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/815789502304133120/wHTDsjhq_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/815789502304133120/wHTDsjhq_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/815763021423255557/1483334347",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 1,
      "favorite_count": 3,
      "favorited": false,
      "retweeted": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:53:30 +0000 2017",
    "id": 830776848317509600,
    "id_str": "830776848317509632",
    "text": "RT @rigaku_daisuki: ？？｢共通の話題が人生しかない｣",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "rigaku_daisuki",
          "name": "東京理科大学理学部第三部",
          "id": 815763021423255600,
          "id_str": "815763021423255557",
          "indices": [
            3,
            18
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1704308238,
      "id_str": "1704308238",
      "name": "むーさん",
      "screen_name": "Physics_OSK",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 419,
      "friends_count": 272,
      "listed_count": 6,
      "created_at": "Tue Aug 27 10:33:31 +0000 2013",
      "favourites_count": 4291,
      "utc_offset": 28800,
      "time_zone": "Irkutsk",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 8611,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/759569311178461184/gUxvGssZ_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/759569311178461184/gUxvGssZ_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1704308238/1470761035",
      "profile_link_color": "1B95E0",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Tue Jan 17 06:16:07 +0000 2017",
      "id": 821239658596008000,
      "id_str": "821239658596007936",
      "text": "？？｢共通の話題が人生しかない｣",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": []
      },
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 815763021423255600,
        "id_str": "815763021423255557",
        "name": "東京理科大学理学部第三部",
        "screen_name": "rigaku_daisuki",
        "location": "我等の集いし各々地にて",
        "description": "神楽坂の幻",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 20,
        "friends_count": 19,
        "listed_count": 0,
        "created_at": "Mon Jan 02 03:33:55 +0000 2017",
        "favourites_count": 81,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 48,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/815789502304133120/wHTDsjhq_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/815789502304133120/wHTDsjhq_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/815763021423255557/1483334347",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 1,
      "favorite_count": 4,
      "favorited": false,
      "retweeted": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:53:56 +0000 2017",
    "id": 830776957063213000,
    "id_str": "830776957063213057",
    "text": "２４時間ジムだからこの時間に来てみた\n三人しか居ないから快適",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 477710702,
      "id_str": "477710702",
      "name": "川瀬拓実@フレンズ",
      "screen_name": "coil_msp123",
      "location": "Tokyo-to, Japan",
      "description": "東京理科大学応用物理４年 趣味プログラマ 電子工作少々 イギリス留学した 物性か量子コンピュータか脳の研究志望 アメリカの大学院行く 趣味アカはこちら→@coil_ver",
      "url": "https://t.co/I4QFl3GqAk",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/I4QFl3GqAk",
              "expanded_url": "http://coil398.hatenablog.com",
              "display_url": "coil398.hatenablog.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 344,
      "friends_count": 553,
      "listed_count": 12,
      "created_at": "Sun Jan 29 13:46:21 +0000 2012",
      "favourites_count": 5166,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 45950,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0099B9",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme4/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme4/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/782838371529830404/JyA4chKW_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/782838371529830404/JyA4chKW_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/477710702/1476424564",
      "profile_link_color": "ABB8C2",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "95E8EC",
      "profile_text_color": "3C3940",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:54:50 +0000 2017",
    "id": 830777184402894800,
    "id_str": "830777184402894849",
    "text": "RT @saitamakita: 【インド】巣の近くにとまったワシの頭を足蹴にする勇敢なカラス\nhttps://t.co/xTWEIQstNX\n\nワシの苛立ちの表情がユーモラス https://t.co/OZAhhPRxL7",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "saitamakita",
          "name": "さいたま@フレンズ",
          "id": 459138098,
          "id_str": "459138098",
          "indices": [
            3,
            15
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/xTWEIQstNX",
          "expanded_url": "http://www.mirror.co.uk/news/weird-news/plumin-cheek-harassed-looking-eagle-9773703",
          "display_url": "mirror.co.uk/news/weird-new…",
          "indices": [
            48,
            71
          ]
        }
      ],
      "media": [
        {
          "id": 829534214928244700,
          "id_str": "829534214928244736",
          "indices": [
            89,
            112
          ],
          "media_url": "http://pbs.twimg.com/media/C4MY-THUoAARIg8.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4MY-THUoAARIg8.jpg",
          "url": "https://t.co/OZAhhPRxL7",
          "display_url": "pic.twitter.com/OZAhhPRxL7",
          "expanded_url": "https://twitter.com/saitamakita/status/829534304979935232/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 680,
              "h": 436,
              "resize": "fit"
            },
            "large": {
              "w": 960,
              "h": 616,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 960,
              "h": 616,
              "resize": "fit"
            }
          },
          "source_status_id": 829534304979935200,
          "source_status_id_str": "829534304979935232",
          "source_user_id": 459138098,
          "source_user_id_str": "459138098"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 829534214928244700,
          "id_str": "829534214928244736",
          "indices": [
            89,
            112
          ],
          "media_url": "http://pbs.twimg.com/media/C4MY-THUoAARIg8.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4MY-THUoAARIg8.jpg",
          "url": "https://t.co/OZAhhPRxL7",
          "display_url": "pic.twitter.com/OZAhhPRxL7",
          "expanded_url": "https://twitter.com/saitamakita/status/829534304979935232/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 680,
              "h": 436,
              "resize": "fit"
            },
            "large": {
              "w": 960,
              "h": 616,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 960,
              "h": 616,
              "resize": "fit"
            }
          },
          "source_status_id": 829534304979935200,
          "source_status_id_str": "829534304979935232",
          "source_user_id": 459138098,
          "source_user_id_str": "459138098"
        },
        {
          "id": 829534258284810200,
          "id_str": "829534258284810242",
          "indices": [
            89,
            112
          ],
          "media_url": "http://pbs.twimg.com/media/C4MZA0oVUAIBqVM.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4MZA0oVUAIBqVM.jpg",
          "url": "https://t.co/OZAhhPRxL7",
          "display_url": "pic.twitter.com/OZAhhPRxL7",
          "expanded_url": "https://twitter.com/saitamakita/status/829534304979935232/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 691,
              "h": 960,
              "resize": "fit"
            },
            "large": {
              "w": 691,
              "h": 960,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 489,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 829534304979935200,
          "source_status_id_str": "829534304979935232",
          "source_user_id": 459138098,
          "source_user_id_str": "459138098"
        },
        {
          "id": 829534284838957000,
          "id_str": "829534284838957056",
          "indices": [
            89,
            112
          ],
          "media_url": "http://pbs.twimg.com/media/C4MZCXjVcAA4x-O.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4MZCXjVcAA4x-O.jpg",
          "url": "https://t.co/OZAhhPRxL7",
          "display_url": "pic.twitter.com/OZAhhPRxL7",
          "expanded_url": "https://twitter.com/saitamakita/status/829534304979935232/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 711,
              "h": 960,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 504,
              "h": 680,
              "resize": "fit"
            },
            "large": {
              "w": 711,
              "h": 960,
              "resize": "fit"
            }
          },
          "source_status_id": 829534304979935200,
          "source_status_id_str": "829534304979935232",
          "source_user_id": 459138098,
          "source_user_id_str": "459138098"
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 3167204815,
      "id_str": "3167204815",
      "name": "Keita@結局アレックス頑張る",
      "screen_name": "so_good_Xeno",
      "location": "",
      "description": "まったりひっそりと。東京理科大学生。スト5アレックス。 ellegarden馬鹿でもある。",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 46,
      "friends_count": 187,
      "listed_count": 0,
      "created_at": "Wed Apr 22 10:38:53 +0000 2015",
      "favourites_count": 136,
      "utc_offset": 28800,
      "time_zone": "Irkutsk",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 5606,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/662555848900636675/LxCcC-fQ_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/662555848900636675/LxCcC-fQ_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/3167204815/1453997238",
      "profile_link_color": "3B94D9",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Thu Feb 09 03:36:04 +0000 2017",
      "id": 829534304979935200,
      "id_str": "829534304979935232",
      "text": "【インド】巣の近くにとまったワシの頭を足蹴にする勇敢なカラス\nhttps://t.co/xTWEIQstNX\n\nワシの苛立ちの表情がユーモラス https://t.co/OZAhhPRxL7",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/xTWEIQstNX",
            "expanded_url": "http://www.mirror.co.uk/news/weird-news/plumin-cheek-harassed-looking-eagle-9773703",
            "display_url": "mirror.co.uk/news/weird-new…",
            "indices": [
              31,
              54
            ]
          }
        ],
        "media": [
          {
            "id": 829534214928244700,
            "id_str": "829534214928244736",
            "indices": [
              72,
              95
            ],
            "media_url": "http://pbs.twimg.com/media/C4MY-THUoAARIg8.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4MY-THUoAARIg8.jpg",
            "url": "https://t.co/OZAhhPRxL7",
            "display_url": "pic.twitter.com/OZAhhPRxL7",
            "expanded_url": "https://twitter.com/saitamakita/status/829534304979935232/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 680,
                "h": 436,
                "resize": "fit"
              },
              "large": {
                "w": 960,
                "h": 616,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 960,
                "h": 616,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 829534214928244700,
            "id_str": "829534214928244736",
            "indices": [
              72,
              95
            ],
            "media_url": "http://pbs.twimg.com/media/C4MY-THUoAARIg8.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4MY-THUoAARIg8.jpg",
            "url": "https://t.co/OZAhhPRxL7",
            "display_url": "pic.twitter.com/OZAhhPRxL7",
            "expanded_url": "https://twitter.com/saitamakita/status/829534304979935232/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 680,
                "h": 436,
                "resize": "fit"
              },
              "large": {
                "w": 960,
                "h": 616,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 960,
                "h": 616,
                "resize": "fit"
              }
            }
          },
          {
            "id": 829534258284810200,
            "id_str": "829534258284810242",
            "indices": [
              72,
              95
            ],
            "media_url": "http://pbs.twimg.com/media/C4MZA0oVUAIBqVM.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4MZA0oVUAIBqVM.jpg",
            "url": "https://t.co/OZAhhPRxL7",
            "display_url": "pic.twitter.com/OZAhhPRxL7",
            "expanded_url": "https://twitter.com/saitamakita/status/829534304979935232/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 691,
                "h": 960,
                "resize": "fit"
              },
              "large": {
                "w": 691,
                "h": 960,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 489,
                "h": 680,
                "resize": "fit"
              }
            }
          },
          {
            "id": 829534284838957000,
            "id_str": "829534284838957056",
            "indices": [
              72,
              95
            ],
            "media_url": "http://pbs.twimg.com/media/C4MZCXjVcAA4x-O.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4MZCXjVcAA4x-O.jpg",
            "url": "https://t.co/OZAhhPRxL7",
            "display_url": "pic.twitter.com/OZAhhPRxL7",
            "expanded_url": "https://twitter.com/saitamakita/status/829534304979935232/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 711,
                "h": 960,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 504,
                "h": 680,
                "resize": "fit"
              },
              "large": {
                "w": 711,
                "h": 960,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 459138098,
        "id_str": "459138098",
        "name": "さいたま@フレンズ",
        "screen_name": "saitamakita",
        "location": "彩の国",
        "description": "東方Project／ゲーム／アニメ／軍事／生物／ポケモンGO／オカルトetc… さとこいLOVEで生物ネタツイート多め。素敵なアイコンはほげキノコさん@hogekinoko に描いていただきました（＾ ω＾）",
        "url": "https://t.co/fTQfmLDD8B",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/fTQfmLDD8B",
                "expanded_url": "https://www.pref.saitama.lg.jp",
                "display_url": "pref.saitama.lg.jp",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 6588,
        "friends_count": 407,
        "listed_count": 162,
        "created_at": "Mon Jan 09 09:53:09 +0000 2012",
        "favourites_count": 17887,
        "utc_offset": 32400,
        "time_zone": "Tokyo",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 93516,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/820436200477466624/RuaXm4ex_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/820436200477466624/RuaXm4ex_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/459138098/1437829498",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 1462,
      "favorite_count": 1592,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 1462,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:55:42 +0000 2017",
    "id": 830777403630772200,
    "id_str": "830777403630772225",
    "text": "@coil_msp123 マシントレーニングですか？",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "coil_msp123",
          "name": "川瀬拓実@フレンズ",
          "id": 477710702,
          "id_str": "477710702",
          "indices": [
            0,
            12
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": 830776957063213000,
    "in_reply_to_status_id_str": "830776957063213057",
    "in_reply_to_user_id": 477710702,
    "in_reply_to_user_id_str": "477710702",
    "in_reply_to_screen_name": "coil_msp123",
    "user": {
      "id": 729269821762764800,
      "id_str": "729269821762764800",
      "name": "Mt.Fuji",
      "screen_name": "32_1_Maestoso",
      "location": "東京都　江戸川区",
      "description": "TUS-SJ3年。純粋数学、プログラミングなど。",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 38,
      "friends_count": 34,
      "listed_count": 1,
      "created_at": "Sun May 08 11:20:49 +0000 2016",
      "favourites_count": 1005,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 1687,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/729306037644230656/D4w9Ue8O_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/729306037644230656/D4w9Ue8O_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/729269821762764800/1462715058",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:55:56 +0000 2017",
    "id": 830777460325167100,
    "id_str": "830777460325167104",
    "text": "RT @sagat_tigerknee: 背水の逆転劇（失敗）\n#TOPANGAリーグ https://t.co/bg59Y4FJbw",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "TOPANGAリーグ",
          "indices": [
            32,
            43
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "sagat_tigerknee",
          "name": "膝゜",
          "id": 3189782720,
          "id_str": "3189782720",
          "indices": [
            3,
            19
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 830730671022706700,
          "id_str": "830730671022706688",
          "indices": [
            44,
            67
          ],
          "media_url": "http://pbs.twimg.com/tweet_video_thumb/C4dZJNZUkAAH2OX.jpg",
          "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/C4dZJNZUkAAH2OX.jpg",
          "url": "https://t.co/bg59Y4FJbw",
          "display_url": "pic.twitter.com/bg59Y4FJbw",
          "expanded_url": "https://twitter.com/sagat_tigerknee/status/830730749858811904/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 368,
              "h": 204,
              "resize": "fit"
            },
            "large": {
              "w": 368,
              "h": 204,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 340,
              "h": 188,
              "resize": "fit"
            }
          },
          "source_status_id": 830730749858811900,
          "source_status_id_str": "830730749858811904",
          "source_user_id": 3189782720,
          "source_user_id_str": "3189782720"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830730671022706700,
          "id_str": "830730671022706688",
          "indices": [
            44,
            67
          ],
          "media_url": "http://pbs.twimg.com/tweet_video_thumb/C4dZJNZUkAAH2OX.jpg",
          "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/C4dZJNZUkAAH2OX.jpg",
          "url": "https://t.co/bg59Y4FJbw",
          "display_url": "pic.twitter.com/bg59Y4FJbw",
          "expanded_url": "https://twitter.com/sagat_tigerknee/status/830730749858811904/photo/1",
          "type": "animated_gif",
          "sizes": {
            "medium": {
              "w": 368,
              "h": 204,
              "resize": "fit"
            },
            "large": {
              "w": 368,
              "h": 204,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 340,
              "h": 188,
              "resize": "fit"
            }
          },
          "source_status_id": 830730749858811900,
          "source_status_id_str": "830730749858811904",
          "source_user_id": 3189782720,
          "source_user_id_str": "3189782720",
          "video_info": {
            "aspect_ratio": [
              92,
              51
            ],
            "variants": [
              {
                "bitrate": 0,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/tweet_video/C4dZJNZUkAAH2OX.mp4"
              }
            ]
          }
        }
      ]
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 193984555,
      "id_str": "193984555",
      "name": "帝",
      "screen_name": "ArLEquiN64",
      "location": "Aŋra Mainiuu",
      "description": "はやくつよいAIになりたい Discord: ArLE#2642",
      "url": "https://t.co/Xh2u5HQ0vJ",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/Xh2u5HQ0vJ",
              "expanded_url": "https://www.amazon.co.jp/registry/wishlist/39MFUI7UQ42O3/ref=cm_sw_r_cp_ip_wl_o_19N0xbB0F2N15",
              "display_url": "amazon.co.jp/registry/wishl…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 638,
      "friends_count": 1069,
      "listed_count": 30,
      "created_at": "Thu Sep 23 04:00:22 +0000 2010",
      "favourites_count": 3493,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 35034,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "131516",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/759322369/1bb2994b2f0d1f47dd240caf32da3e9a.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/759322369/1bb2994b2f0d1f47dd240caf32da3e9a.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/715921432572637185/20mwgKfr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/715921432572637185/20mwgKfr_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/193984555/1459523945",
      "profile_link_color": "FF0000",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Feb 12 10:50:19 +0000 2017",
      "id": 830730749858811900,
      "id_str": "830730749858811904",
      "text": "背水の逆転劇（失敗）\n#TOPANGAリーグ https://t.co/bg59Y4FJbw",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "TOPANGAリーグ",
            "indices": [
              11,
              22
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 830730671022706700,
            "id_str": "830730671022706688",
            "indices": [
              23,
              46
            ],
            "media_url": "http://pbs.twimg.com/tweet_video_thumb/C4dZJNZUkAAH2OX.jpg",
            "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/C4dZJNZUkAAH2OX.jpg",
            "url": "https://t.co/bg59Y4FJbw",
            "display_url": "pic.twitter.com/bg59Y4FJbw",
            "expanded_url": "https://twitter.com/sagat_tigerknee/status/830730749858811904/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 368,
                "h": 204,
                "resize": "fit"
              },
              "large": {
                "w": 368,
                "h": 204,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 340,
                "h": 188,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 830730671022706700,
            "id_str": "830730671022706688",
            "indices": [
              23,
              46
            ],
            "media_url": "http://pbs.twimg.com/tweet_video_thumb/C4dZJNZUkAAH2OX.jpg",
            "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/C4dZJNZUkAAH2OX.jpg",
            "url": "https://t.co/bg59Y4FJbw",
            "display_url": "pic.twitter.com/bg59Y4FJbw",
            "expanded_url": "https://twitter.com/sagat_tigerknee/status/830730749858811904/photo/1",
            "type": "animated_gif",
            "sizes": {
              "medium": {
                "w": 368,
                "h": 204,
                "resize": "fit"
              },
              "large": {
                "w": 368,
                "h": 204,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 340,
                "h": 188,
                "resize": "fit"
              }
            },
            "video_info": {
              "aspect_ratio": [
                92,
                51
              ],
              "variants": [
                {
                  "bitrate": 0,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/tweet_video/C4dZJNZUkAAH2OX.mp4"
                }
              ]
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 3189782720,
        "id_str": "3189782720",
        "name": "膝゜",
        "screen_name": "sagat_tigerknee",
        "location": "宮城",
        "description": "アイマス/スト5 ID: kagyu-/ハースストーン/シージ/ギルティ/デレステ/グラブル/ポケモン/シャドバ/",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 86,
        "friends_count": 55,
        "listed_count": 3,
        "created_at": "Sat May 09 12:43:29 +0000 2015",
        "favourites_count": 695,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3525,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "000000",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/791989088014315520/cnLmmdeV_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/791989088014315520/cnLmmdeV_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3189782720/1485732472",
        "profile_link_color": "ABB8C2",
        "profile_sidebar_border_color": "000000",
        "profile_sidebar_fill_color": "000000",
        "profile_text_color": "000000",
        "profile_use_background_image": false,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 1035,
      "favorite_count": 627,
      "favorited": true,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 1035,
    "favorite_count": 0,
    "favorited": true,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:56:25 +0000 2017",
    "id": 830777582857490400,
    "id_str": "830777582857490432",
    "text": "RT @kaguramaruta: 日曜日、珍しく開店 そして、早い#ラーメン #神楽坂",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "神楽坂",
          "indices": [
            40,
            44
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "kaguramaruta",
          "name": "中華そば まる田",
          "id": 912490172,
          "id_str": "912490172",
          "indices": [
            3,
            16
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1704308238,
      "id_str": "1704308238",
      "name": "むーさん",
      "screen_name": "Physics_OSK",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 419,
      "friends_count": 272,
      "listed_count": 6,
      "created_at": "Tue Aug 27 10:33:31 +0000 2013",
      "favourites_count": 4291,
      "utc_offset": 28800,
      "time_zone": "Irkutsk",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 8611,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/759569311178461184/gUxvGssZ_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/759569311178461184/gUxvGssZ_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1704308238/1470761035",
      "profile_link_color": "1B95E0",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Feb 12 13:55:27 +0000 2017",
      "id": 830777341315985400,
      "id_str": "830777341315985408",
      "text": "日曜日、珍しく開店 そして、早い#ラーメン #神楽坂",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "神楽坂",
            "indices": [
              22,
              26
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": []
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 912490172,
        "id_str": "912490172",
        "name": "中華そば まる田",
        "screen_name": "kaguramaruta",
        "location": "東京都新宿区神楽坂4-2-30",
        "description": "はじめまして、神楽坂の深夜のみ営業してます、中華そば まる田です。 毘沙門天前の看板とお店のちょうちん、Twitterが開店の合図です。よろしくお願いします。尚、利き酒師、焼酎利き酒師がおります。お気軽にお声かけ下さい☺︎https://t.co/3EnuaDyvo7",
        "url": null,
        "entities": {
          "description": {
            "urls": [
              {
                "url": "https://t.co/3EnuaDyvo7",
                "expanded_url": "http://Instagram.com/chuukasoba_maruta",
                "display_url": "Instagram.com/chuukasoba_mar…",
                "indices": [
                  111,
                  134
                ]
              }
            ]
          }
        },
        "protected": false,
        "followers_count": 878,
        "friends_count": 31,
        "listed_count": 37,
        "created_at": "Mon Oct 29 13:53:18 +0000 2012",
        "favourites_count": 17,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 1266,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/2845696013/e81909e66c2ee64db67546a8d0ec7543_normal.jpeg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/2845696013/e81909e66c2ee64db67546a8d0ec7543_normal.jpeg",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 2,
      "favorite_count": 4,
      "favorited": false,
      "retweeted": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 2,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:57:09 +0000 2017",
    "id": 830777769063690200,
    "id_str": "830777769063690244",
    "text": "@32_1_Maestoso それ",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "32_1_Maestoso",
          "name": "Mt.Fuji",
          "id": 729269821762764800,
          "id_str": "729269821762764800",
          "indices": [
            0,
            14
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": 830777403630772200,
    "in_reply_to_status_id_str": "830777403630772225",
    "in_reply_to_user_id": 729269821762764800,
    "in_reply_to_user_id_str": "729269821762764800",
    "in_reply_to_screen_name": "32_1_Maestoso",
    "user": {
      "id": 477710702,
      "id_str": "477710702",
      "name": "川瀬拓実@フレンズ",
      "screen_name": "coil_msp123",
      "location": "Tokyo-to, Japan",
      "description": "東京理科大学応用物理４年 趣味プログラマ 電子工作少々 イギリス留学した 物性か量子コンピュータか脳の研究志望 アメリカの大学院行く 趣味アカはこちら→@coil_ver",
      "url": "https://t.co/I4QFl3GqAk",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/I4QFl3GqAk",
              "expanded_url": "http://coil398.hatenablog.com",
              "display_url": "coil398.hatenablog.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 344,
      "friends_count": 553,
      "listed_count": 12,
      "created_at": "Sun Jan 29 13:46:21 +0000 2012",
      "favourites_count": 5166,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 45950,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0099B9",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme4/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme4/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/782838371529830404/JyA4chKW_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/782838371529830404/JyA4chKW_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/477710702/1476424564",
      "profile_link_color": "ABB8C2",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "95E8EC",
      "profile_text_color": "3C3940",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:59:33 +0000 2017",
    "id": 830778370359119900,
    "id_str": "830778370359119872",
    "text": "まじで疲れた",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://d.hatena.ne.jp/ABS104a/\" rel=\"nofollow\">Biyon Lite</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2252222857,
      "id_str": "2252222857",
      "name": "シス",
      "screen_name": "aplysia0",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 116,
      "friends_count": 146,
      "listed_count": 1,
      "created_at": "Wed Dec 18 16:17:22 +0000 2013",
      "favourites_count": 13052,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 53789,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2252222857/1432711472",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 13:59:41 +0000 2017",
    "id": 830778405662515200,
    "id_str": "830778405662515201",
    "text": "明後日るふれん宅いくのめんどいな",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://d.hatena.ne.jp/ABS104a/\" rel=\"nofollow\">Biyon Lite</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2252222857,
      "id_str": "2252222857",
      "name": "シス",
      "screen_name": "aplysia0",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 116,
      "friends_count": 146,
      "listed_count": 1,
      "created_at": "Wed Dec 18 16:17:22 +0000 2013",
      "favourites_count": 13052,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 53789,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2252222857/1432711472",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:00:50 +0000 2017",
    "id": 830778693945405400,
    "id_str": "830778693945405440",
    "text": "@aplysia0 てへ(´&gt;ω∂`)",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "aplysia0",
          "name": "シス",
          "id": 2252222857,
          "id_str": "2252222857",
          "indices": [
            0,
            9
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": 830774206862233600,
    "in_reply_to_status_id_str": "830774206862233602",
    "in_reply_to_user_id": 2252222857,
    "in_reply_to_user_id_str": "2252222857",
    "in_reply_to_screen_name": "aplysia0",
    "user": {
      "id": 1515785034,
      "id_str": "1515785034",
      "name": "かいぞー",
      "screen_name": "wakameeeees",
      "location": "dasaitama",
      "description": "TUS SJ-A  ANGELINA(@bonbon_cf) インカレー部",
      "url": "https://t.co/hqX1Kkh8vi",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/hqX1Kkh8vi",
              "expanded_url": "https://www.instagram.com/skphotograph.jp/",
              "display_url": "instagram.com/skphotograph.j…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 382,
      "friends_count": 428,
      "listed_count": 8,
      "created_at": "Fri Jun 14 08:46:54 +0000 2013",
      "favourites_count": 7687,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 13976,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/804279694510034944/ZTDH4oiS_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/804279694510034944/ZTDH4oiS_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1515785034/1399475120",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:01:30 +0000 2017",
    "id": 830778860769734700,
    "id_str": "830778860769734656",
    "text": "@yryr_jump @501erica 4.0からが本番やぞ✋",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "yryr_jump",
          "name": "ひゆーが@青空のラプソディ",
          "id": 1694085883,
          "id_str": "1694085883",
          "indices": [
            0,
            10
          ]
        },
        {
          "screen_name": "501erica",
          "name": "Cure Erica",
          "id": 291061529,
          "id_str": "291061529",
          "indices": [
            11,
            20
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://tapbots.com/tweetbot\" rel=\"nofollow\">Tweetbot for iΟS</a>",
    "in_reply_to_status_id": 830778438319345700,
    "in_reply_to_status_id_str": "830778438319345664",
    "in_reply_to_user_id": 1694085883,
    "in_reply_to_user_id_str": "1694085883",
    "in_reply_to_screen_name": "yryr_jump",
    "user": {
      "id": 2467616982,
      "id_str": "2467616982",
      "name": "ひじひじ@春から理科大OS科",
      "screen_name": "hijiritus",
      "location": "Miki, Hyogo ⇔ Tokyo(川の向こう)",
      "description": "蜻蛉→TUS/SJ, chibi lab.14",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 118,
      "friends_count": 118,
      "listed_count": 5,
      "created_at": "Mon Apr 28 11:39:34 +0000 2014",
      "favourites_count": 4644,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 7665,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/812902981095989250/tucm-_Fb_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/812902981095989250/tucm-_Fb_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2467616982/1451349202",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:01:41 +0000 2017",
    "id": 830778909339766800,
    "id_str": "830778909339766784",
    "text": "3の倍数と3のつく数字の時だけ天界から舞い降りし翼をもがれた堕天使になります\n\n英文：I'll only get a Lucifer from heaven was plucked off wings when I count multiples of 3 and say 3.",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 608917979,
      "id_str": "608917979",
      "name": "来世使える！クソみたいな英文",
      "screen_name": "yuumeijinbot",
      "location": "",
      "description": "クソみたいな英文で一緒に英語を勉強しよう！中の人のアカウントはこちら（@knosuke0371）",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 284440,
      "friends_count": 58864,
      "listed_count": 4242,
      "created_at": "Fri Jun 15 08:58:04 +0000 2012",
      "favourites_count": 745,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 12223,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/2906310075/b09ac3ac25528a3c7369aaaa684bec0f_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/2906310075/b09ac3ac25528a3c7369aaaa684bec0f_normal.jpeg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 102,
    "favorite_count": 166,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:01:59 +0000 2017",
    "id": 830778984983965700,
    "id_str": "830778984983965696",
    "text": "チバテレでアイシールド毎日１話ずつ再放送してくれてるのほんと嬉しい、毎日楽しんでるわ",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1274924040,
      "id_str": "1274924040",
      "name": "なばゆう@3/18fripSideSSA",
      "screen_name": "funky_nabasan",
      "location": "茨城県守谷市 ⇔ 東京都新宿区神楽坂",
      "description": "けやき/竜一/東進柏(暗黒の浪人期)/東京理科大理学部応用数学科/\n趣味はアニメとかアニソンとか野球、サッカーとか/アニソンライブによく行きます。南條愛乃、綾野ましろ、高垣彩陽、水樹奈々好きです",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 228,
      "friends_count": 334,
      "listed_count": 3,
      "created_at": "Sun Mar 17 13:10:32 +0000 2013",
      "favourites_count": 7980,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 29221,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5ABB5",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1274924040/1482655391",
      "profile_link_color": "3B94D9",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E3E2DE",
      "profile_text_color": "634047",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:02:07 +0000 2017",
    "id": 830779018282561500,
    "id_str": "830779018282561536",
    "text": "私のコンパイラくん、まだ時々レジスタ割り当てがうまくできなくて、足りるはずなのに『レジスタが足りないよ〜 ＞＜』って諦めちゃうんだ。かわいいよね",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://github.com/chomado/jkgf_bot\" rel=\"nofollow\">情報系彼女bot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2226451933,
      "id_str": "2226451933",
      "name": "情報系彼女bot",
      "screen_name": "jkgf_bot",
      "location": "127.0.0.1",
      "description": "情報k学を勉強している学生です。某社でプログラマのバイトしてますっ！大好きなプログラミングの話をよくしてるかな。botです。(* #情報系彼女 のタグでの台詞提供ネタ提供お待ちしています! *)",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 5021,
      "friends_count": 37,
      "listed_count": 173,
      "created_at": "Mon Dec 02 10:24:25 +0000 2013",
      "favourites_count": 343,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 17778,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/378800000820115541/09db3cf6504167046848ef66c7c36df3_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000820115541/09db3cf6504167046848ef66c7c36df3_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2226451933/1386521412",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:02:37 +0000 2017",
    "id": 830779144015269900,
    "id_str": "830779144015269888",
    "text": "この体調なら明日は大丈夫かなぁ…？休みを寝て過ごしてしまったので色々と積み残したまま…",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://tapbots.com/tweetbot\" rel=\"nofollow\">Tweetbot for iΟS</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1895619258,
      "id_str": "1895619258",
      "name": "frontainer",
      "screen_name": "frontainer",
      "location": "Japan Tokyo",
      "description": "技術顧問やフリーランスエンジニアとして2017.01から活動を開始したばかりのひよっこフリーランサー",
      "url": "https://t.co/FjKOSMVFkG",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/FjKOSMVFkG",
              "expanded_url": "https://github.com/frontainer",
              "display_url": "github.com/frontainer",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 979,
      "friends_count": 726,
      "listed_count": 36,
      "created_at": "Mon Sep 23 00:53:35 +0000 2013",
      "favourites_count": 69,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 3691,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000119044865/93df3b7ccdb205133908e514ca01e881.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000119044865/93df3b7ccdb205133908e514ca01e881.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/440866747554336768/IMI_q3bg_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/440866747554336768/IMI_q3bg_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1895619258/1401425065",
      "profile_link_color": "0084B4",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:02:41 +0000 2017",
    "id": 830779161367097300,
    "id_str": "830779161367097344",
    "text": "@wakameeeees ブロックします！！！",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "wakameeeees",
          "name": "かいぞー",
          "id": 1515785034,
          "id_str": "1515785034",
          "indices": [
            0,
            12
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://d.hatena.ne.jp/ABS104a/\" rel=\"nofollow\">Biyon Lite</a>",
    "in_reply_to_status_id": 830778693945405400,
    "in_reply_to_status_id_str": "830778693945405440",
    "in_reply_to_user_id": 1515785034,
    "in_reply_to_user_id_str": "1515785034",
    "in_reply_to_screen_name": "wakameeeees",
    "user": {
      "id": 2252222857,
      "id_str": "2252222857",
      "name": "シス",
      "screen_name": "aplysia0",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 116,
      "friends_count": 146,
      "listed_count": 1,
      "created_at": "Wed Dec 18 16:17:22 +0000 2013",
      "favourites_count": 13052,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 53789,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2252222857/1432711472",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:03:57 +0000 2017",
    "id": 830779477047152600,
    "id_str": "830779477047152643",
    "text": "なんか微妙に日本語にできてないなぁ",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:04:05 +0000 2017",
    "id": 830779511515942900,
    "id_str": "830779511515942914",
    "text": "どう訳すといいんだろ",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:07:04 +0000 2017",
    "id": 830780264737493000,
    "id_str": "830780264737492992",
    "text": "オタクの服装と言えばダサさの極みだが、オタクはそれがダサいと知らないどころかまともな服装だと思っている。それは単純にセンスがないのではなく知識がないだけだ。絵でも同様に、外部からの情報を見下して自分の知識の至高を信じて描いていればオタクファッションと同じ「嘲笑の対象」になるぞ。",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://twitter.com/skekyx\" rel=\"nofollow\">絵の描き方を教えてくれるエミネムさんbot</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2276591558,
      "id_str": "2276591558",
      "name": "絵の描き方を教えてくれるエミネムさん",
      "screen_name": "E_minem_san_bot",
      "location": "",
      "description": "よう。今日からお前らにいいこと教えてやる。絵の描き方だ。　　 動画作者の自戒という名の手の込んだブーメランbotを弄り回したもの。フォロー0にしよう運動実施中",
      "url": "https://t.co/qsHm66HUHQ",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/qsHm66HUHQ",
              "expanded_url": "http://www.nicovideo.jp/watch/sm20939758",
              "display_url": "nicovideo.jp/watch/sm209397…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 83324,
      "friends_count": 13946,
      "listed_count": 2366,
      "created_at": "Sat Jan 04 20:02:18 +0000 2014",
      "favourites_count": 0,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 16762,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "131516",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/423091244672098305/b2wOJ9m8_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/423091244672098305/b2wOJ9m8_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2276591558/1401694160",
      "profile_link_color": "009999",
      "profile_sidebar_border_color": "EEEEEE",
      "profile_sidebar_fill_color": "EFEFEF",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 30,
    "favorite_count": 74,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:08:32 +0000 2017",
    "id": 830780633735536600,
    "id_str": "830780633735536641",
    "text": "売りに出す前の最後のパシャり。 https://t.co/bmreUXqQlq",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [],
      "media": [
        {
          "id": 830780627226030100,
          "id_str": "830780627226030080",
          "indices": [
            16,
            39
          ],
          "media_url": "http://pbs.twimg.com/media/C4eGlCwVcAAzEOY.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4eGlCwVcAAzEOY.jpg",
          "url": "https://t.co/bmreUXqQlq",
          "display_url": "pic.twitter.com/bmreUXqQlq",
          "expanded_url": "https://twitter.com/amamariopianist/status/830780633735536641/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 510,
              "h": 680,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 900,
              "h": 1200,
              "resize": "fit"
            },
            "large": {
              "w": 960,
              "h": 1280,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830780627226030100,
          "id_str": "830780627226030080",
          "indices": [
            16,
            39
          ],
          "media_url": "http://pbs.twimg.com/media/C4eGlCwVcAAzEOY.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4eGlCwVcAAzEOY.jpg",
          "url": "https://t.co/bmreUXqQlq",
          "display_url": "pic.twitter.com/bmreUXqQlq",
          "expanded_url": "https://twitter.com/amamariopianist/status/830780633735536641/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 510,
              "h": 680,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 900,
              "h": 1200,
              "resize": "fit"
            },
            "large": {
              "w": 960,
              "h": 1280,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 301304117,
      "id_str": "301304117",
      "name": "キスして子どもが出来るゆぶ",
      "screen_name": "amamariopianist",
      "location": "おきらく乱闘部屋",
      "description": "キスして子どもが出来たならキスする隙間もないくらい子どもが生まれる。",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 400,
      "friends_count": 409,
      "listed_count": 41,
      "created_at": "Thu May 19 07:31:29 +0000 2011",
      "favourites_count": 34549,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 812,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/450688113593950208/UexRRD-J.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/450688113593950208/UexRRD-J.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/827433742712991746/OfhswP0r_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/827433742712991746/OfhswP0r_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/301304117/1485379252",
      "profile_link_color": "0084B4",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:09:08 +0000 2017",
    "id": 830780781626732500,
    "id_str": "830780781626732544",
    "text": "やってるゲーム多すぎて時間足りない",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://d.hatena.ne.jp/ABS104a/\" rel=\"nofollow\">Biyon Lite</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2252222857,
      "id_str": "2252222857",
      "name": "シス",
      "screen_name": "aplysia0",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 116,
      "friends_count": 146,
      "listed_count": 1,
      "created_at": "Wed Dec 18 16:17:22 +0000 2013",
      "favourites_count": 13052,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 53789,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2252222857/1432711472",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:09:16 +0000 2017",
    "id": 830780818171719700,
    "id_str": "830780818171719680",
    "text": "研究室とか入ってられんわ",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://d.hatena.ne.jp/ABS104a/\" rel=\"nofollow\">Biyon Lite</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2252222857,
      "id_str": "2252222857",
      "name": "シス",
      "screen_name": "aplysia0",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 116,
      "friends_count": 146,
      "listed_count": 1,
      "created_at": "Wed Dec 18 16:17:22 +0000 2013",
      "favourites_count": 13052,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 53789,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2252222857/1432711472",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:09:25 +0000 2017",
    "id": 830780852976054300,
    "id_str": "830780852976054272",
    "text": "総論とろ()",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://d.hatena.ne.jp/ABS104a/\" rel=\"nofollow\">Biyon Lite</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2252222857,
      "id_str": "2252222857",
      "name": "シス",
      "screen_name": "aplysia0",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 116,
      "friends_count": 146,
      "listed_count": 1,
      "created_at": "Wed Dec 18 16:17:22 +0000 2013",
      "favourites_count": 13052,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 53789,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2252222857/1432711472",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:10:14 +0000 2017",
    "id": 830781061835608000,
    "id_str": "830781061835608064",
    "text": "にゃーん",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 193984555,
      "id_str": "193984555",
      "name": "帝",
      "screen_name": "ArLEquiN64",
      "location": "Aŋra Mainiuu",
      "description": "はやくつよいAIになりたい Discord: ArLE#2642",
      "url": "https://t.co/Xh2u5HQ0vJ",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/Xh2u5HQ0vJ",
              "expanded_url": "https://www.amazon.co.jp/registry/wishlist/39MFUI7UQ42O3/ref=cm_sw_r_cp_ip_wl_o_19N0xbB0F2N15",
              "display_url": "amazon.co.jp/registry/wishl…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 638,
      "friends_count": 1069,
      "listed_count": 30,
      "created_at": "Thu Sep 23 04:00:22 +0000 2010",
      "favourites_count": 3493,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 35034,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "131516",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/759322369/1bb2994b2f0d1f47dd240caf32da3e9a.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/759322369/1bb2994b2f0d1f47dd240caf32da3e9a.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/715921432572637185/20mwgKfr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/715921432572637185/20mwgKfr_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/193984555/1459523945",
      "profile_link_color": "FF0000",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:10:41 +0000 2017",
    "id": 830781173060116500,
    "id_str": "830781173060116480",
    "text": "にゃーん",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 322116499,
      "id_str": "322116499",
      "name": "ぽんりぃ",
      "screen_name": "pn1y",
      "location": "Tokyo",
      "description": "Pomupomu Purine is tracing a light.",
      "url": "https://t.co/jDBKJUrwp4",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/jDBKJUrwp4",
              "expanded_url": "http://pnly.jp/",
              "display_url": "pnly.jp",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1507,
      "friends_count": 1748,
      "listed_count": 104,
      "created_at": "Wed Jun 22 17:17:52 +0000 2011",
      "favourites_count": 98131,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 139159,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000161755793/zNTB1_Xu.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000161755793/zNTB1_Xu.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/769175347124314113/2udcs1WJ_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/769175347124314113/2udcs1WJ_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/322116499/1469986638",
      "profile_link_color": "1DB35E",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:12:36 +0000 2017",
    "id": 830781656415940600,
    "id_str": "830781656415940608",
    "text": "@coil_msp123 マッチョ川瀬",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "coil_msp123",
          "name": "川瀬拓実@フレンズ",
          "id": 477710702,
          "id_str": "477710702",
          "indices": [
            0,
            12
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": 830777769063690200,
    "in_reply_to_status_id_str": "830777769063690244",
    "in_reply_to_user_id": 477710702,
    "in_reply_to_user_id_str": "477710702",
    "in_reply_to_screen_name": "coil_msp123",
    "user": {
      "id": 729269821762764800,
      "id_str": "729269821762764800",
      "name": "Mt.Fuji",
      "screen_name": "32_1_Maestoso",
      "location": "東京都　江戸川区",
      "description": "TUS-SJ3年。純粋数学、プログラミングなど。",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 38,
      "friends_count": 34,
      "listed_count": 1,
      "created_at": "Sun May 08 11:20:49 +0000 2016",
      "favourites_count": 1005,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 1687,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5F8FA",
      "profile_background_image_url": null,
      "profile_background_image_url_https": null,
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/729306037644230656/D4w9Ue8O_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/729306037644230656/D4w9Ue8O_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/729269821762764800/1462715058",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:12:39 +0000 2017",
    "id": 830781669481205800,
    "id_str": "830781669481205761",
    "text": "@aplysia0 勘弁してくだせえ！ https://t.co/5ku3l28MTE",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "aplysia0",
          "name": "シス",
          "id": 2252222857,
          "id_str": "2252222857",
          "indices": [
            0,
            9
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 830781651688968200,
          "id_str": "830781651688968192",
          "indices": [
            20,
            43
          ],
          "media_url": "http://pbs.twimg.com/media/C4eHgrLVUAATxDl.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4eHgrLVUAATxDl.jpg",
          "url": "https://t.co/5ku3l28MTE",
          "display_url": "pic.twitter.com/5ku3l28MTE",
          "expanded_url": "https://twitter.com/wakameeeees/status/830781669481205761/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 1200,
              "h": 675,
              "resize": "fit"
            },
            "large": {
              "w": 1920,
              "h": 1080,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 383,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830781651688968200,
          "id_str": "830781651688968192",
          "indices": [
            20,
            43
          ],
          "media_url": "http://pbs.twimg.com/media/C4eHgrLVUAATxDl.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4eHgrLVUAATxDl.jpg",
          "url": "https://t.co/5ku3l28MTE",
          "display_url": "pic.twitter.com/5ku3l28MTE",
          "expanded_url": "https://twitter.com/wakameeeees/status/830781669481205761/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 1200,
              "h": 675,
              "resize": "fit"
            },
            "large": {
              "w": 1920,
              "h": 1080,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 383,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": 830779161367097300,
    "in_reply_to_status_id_str": "830779161367097344",
    "in_reply_to_user_id": 2252222857,
    "in_reply_to_user_id_str": "2252222857",
    "in_reply_to_screen_name": "aplysia0",
    "user": {
      "id": 1515785034,
      "id_str": "1515785034",
      "name": "かいぞー",
      "screen_name": "wakameeeees",
      "location": "dasaitama",
      "description": "TUS SJ-A  ANGELINA(@bonbon_cf) インカレー部",
      "url": "https://t.co/hqX1Kkh8vi",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/hqX1Kkh8vi",
              "expanded_url": "https://www.instagram.com/skphotograph.jp/",
              "display_url": "instagram.com/skphotograph.j…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 382,
      "friends_count": 428,
      "listed_count": 8,
      "created_at": "Fri Jun 14 08:46:54 +0000 2013",
      "favourites_count": 7687,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 13976,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/804279694510034944/ZTDH4oiS_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/804279694510034944/ZTDH4oiS_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1515785034/1399475120",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:12:44 +0000 2017",
    "id": 830781688556892200,
    "id_str": "830781688556892160",
    "text": "もうだめ",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 193984555,
      "id_str": "193984555",
      "name": "帝",
      "screen_name": "ArLEquiN64",
      "location": "Aŋra Mainiuu",
      "description": "はやくつよいAIになりたい Discord: ArLE#2642",
      "url": "https://t.co/Xh2u5HQ0vJ",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/Xh2u5HQ0vJ",
              "expanded_url": "https://www.amazon.co.jp/registry/wishlist/39MFUI7UQ42O3/ref=cm_sw_r_cp_ip_wl_o_19N0xbB0F2N15",
              "display_url": "amazon.co.jp/registry/wishl…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 638,
      "friends_count": 1069,
      "listed_count": 30,
      "created_at": "Thu Sep 23 04:00:22 +0000 2010",
      "favourites_count": 3493,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 35034,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "131516",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/759322369/1bb2994b2f0d1f47dd240caf32da3e9a.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/759322369/1bb2994b2f0d1f47dd240caf32da3e9a.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/715921432572637185/20mwgKfr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/715921432572637185/20mwgKfr_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/193984555/1459523945",
      "profile_link_color": "FF0000",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:13:21 +0000 2017",
    "id": 830781843754537000,
    "id_str": "830781843754536962",
    "text": "RT @FCdoPB: 質問の意味を理解できてない四天王最新版ww https://t.co/wYbe7POZx6",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "FCdoPB",
          "name": "【爆笑】高校生おもしろ動画",
          "id": 188466155,
          "id_str": "188466155",
          "indices": [
            3,
            10
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 790511807962058800,
          "id_str": "790511807962058752",
          "indices": [
            34,
            57
          ],
          "media_url": "http://pbs.twimg.com/media/Cvh2TRBUkAAH4NV.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Cvh2TRBUkAAH4NV.jpg",
          "url": "https://t.co/wYbe7POZx6",
          "display_url": "pic.twitter.com/wYbe7POZx6",
          "expanded_url": "https://twitter.com/kusowarotanwwww/status/790511815633416192/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 515,
              "h": 286,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 515,
              "h": 286,
              "resize": "fit"
            },
            "small": {
              "w": 515,
              "h": 286,
              "resize": "fit"
            }
          },
          "source_status_id": 790511815633416200,
          "source_status_id_str": "790511815633416192",
          "source_user_id": 741953776190263300,
          "source_user_id_str": "741953776190263300"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 790511807962058800,
          "id_str": "790511807962058752",
          "indices": [
            34,
            57
          ],
          "media_url": "http://pbs.twimg.com/media/Cvh2TRBUkAAH4NV.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Cvh2TRBUkAAH4NV.jpg",
          "url": "https://t.co/wYbe7POZx6",
          "display_url": "pic.twitter.com/wYbe7POZx6",
          "expanded_url": "https://twitter.com/kusowarotanwwww/status/790511815633416192/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 515,
              "h": 286,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 515,
              "h": 286,
              "resize": "fit"
            },
            "small": {
              "w": 515,
              "h": 286,
              "resize": "fit"
            }
          },
          "source_status_id": 790511815633416200,
          "source_status_id_str": "790511815633416192",
          "source_user_id": 741953776190263300,
          "source_user_id_str": "741953776190263300"
        },
        {
          "id": 790511807974608900,
          "id_str": "790511807974608896",
          "indices": [
            34,
            57
          ],
          "media_url": "http://pbs.twimg.com/media/Cvh2TREUEAA03k2.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Cvh2TREUEAA03k2.jpg",
          "url": "https://t.co/wYbe7POZx6",
          "display_url": "pic.twitter.com/wYbe7POZx6",
          "expanded_url": "https://twitter.com/kusowarotanwwww/status/790511815633416192/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 600,
              "h": 377,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 600,
              "h": 377,
              "resize": "fit"
            },
            "medium": {
              "w": 600,
              "h": 377,
              "resize": "fit"
            }
          },
          "source_status_id": 790511815633416200,
          "source_status_id_str": "790511815633416192",
          "source_user_id": 741953776190263300,
          "source_user_id_str": "741953776190263300"
        },
        {
          "id": 790511807970484200,
          "id_str": "790511807970484224",
          "indices": [
            34,
            57
          ],
          "media_url": "http://pbs.twimg.com/media/Cvh2TRDVIAAWeYd.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Cvh2TRDVIAAWeYd.jpg",
          "url": "https://t.co/wYbe7POZx6",
          "display_url": "pic.twitter.com/wYbe7POZx6",
          "expanded_url": "https://twitter.com/kusowarotanwwww/status/790511815633416192/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 443,
              "h": 254,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 443,
              "h": 254,
              "resize": "fit"
            },
            "medium": {
              "w": 443,
              "h": 254,
              "resize": "fit"
            }
          },
          "source_status_id": 790511815633416200,
          "source_status_id_str": "790511815633416192",
          "source_user_id": 741953776190263300,
          "source_user_id_str": "741953776190263300"
        },
        {
          "id": 790511807970410500,
          "id_str": "790511807970410497",
          "indices": [
            34,
            57
          ],
          "media_url": "http://pbs.twimg.com/media/Cvh2TRDUAAEPaNy.jpg",
          "media_url_https": "https://pbs.twimg.com/media/Cvh2TRDUAAEPaNy.jpg",
          "url": "https://t.co/wYbe7POZx6",
          "display_url": "pic.twitter.com/wYbe7POZx6",
          "expanded_url": "https://twitter.com/kusowarotanwwww/status/790511815633416192/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 1200,
              "h": 695,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 394,
              "resize": "fit"
            },
            "large": {
              "w": 1200,
              "h": 695,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            }
          },
          "source_status_id": 790511815633416200,
          "source_status_id_str": "790511815633416192",
          "source_user_id": 741953776190263300,
          "source_user_id_str": "741953776190263300"
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1515785034,
      "id_str": "1515785034",
      "name": "かいぞー",
      "screen_name": "wakameeeees",
      "location": "dasaitama",
      "description": "TUS SJ-A  ANGELINA(@bonbon_cf) インカレー部",
      "url": "https://t.co/hqX1Kkh8vi",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/hqX1Kkh8vi",
              "expanded_url": "https://www.instagram.com/skphotograph.jp/",
              "display_url": "instagram.com/skphotograph.j…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 382,
      "friends_count": 428,
      "listed_count": 8,
      "created_at": "Fri Jun 14 08:46:54 +0000 2013",
      "favourites_count": 7687,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 13976,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/804279694510034944/ZTDH4oiS_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/804279694510034944/ZTDH4oiS_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1515785034/1399475120",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Feb 12 02:56:46 +0000 2017",
      "id": 830611578185674800,
      "id_str": "830611578185674752",
      "text": "質問の意味を理解できてない四天王最新版ww https://t.co/wYbe7POZx6",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 790511807962058800,
            "id_str": "790511807962058752",
            "indices": [
              22,
              45
            ],
            "media_url": "http://pbs.twimg.com/media/Cvh2TRBUkAAH4NV.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Cvh2TRBUkAAH4NV.jpg",
            "url": "https://t.co/wYbe7POZx6",
            "display_url": "pic.twitter.com/wYbe7POZx6",
            "expanded_url": "https://twitter.com/kusowarotanwwww/status/790511815633416192/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 515,
                "h": 286,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 515,
                "h": 286,
                "resize": "fit"
              },
              "small": {
                "w": 515,
                "h": 286,
                "resize": "fit"
              }
            },
            "source_status_id": 790511815633416200,
            "source_status_id_str": "790511815633416192",
            "source_user_id": 741953776190263300,
            "source_user_id_str": "741953776190263300"
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 790511807962058800,
            "id_str": "790511807962058752",
            "indices": [
              22,
              45
            ],
            "media_url": "http://pbs.twimg.com/media/Cvh2TRBUkAAH4NV.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Cvh2TRBUkAAH4NV.jpg",
            "url": "https://t.co/wYbe7POZx6",
            "display_url": "pic.twitter.com/wYbe7POZx6",
            "expanded_url": "https://twitter.com/kusowarotanwwww/status/790511815633416192/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 515,
                "h": 286,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 515,
                "h": 286,
                "resize": "fit"
              },
              "small": {
                "w": 515,
                "h": 286,
                "resize": "fit"
              }
            },
            "source_status_id": 790511815633416200,
            "source_status_id_str": "790511815633416192",
            "source_user_id": 741953776190263300,
            "source_user_id_str": "741953776190263300"
          },
          {
            "id": 790511807974608900,
            "id_str": "790511807974608896",
            "indices": [
              22,
              45
            ],
            "media_url": "http://pbs.twimg.com/media/Cvh2TREUEAA03k2.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Cvh2TREUEAA03k2.jpg",
            "url": "https://t.co/wYbe7POZx6",
            "display_url": "pic.twitter.com/wYbe7POZx6",
            "expanded_url": "https://twitter.com/kusowarotanwwww/status/790511815633416192/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 600,
                "h": 377,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 600,
                "h": 377,
                "resize": "fit"
              },
              "medium": {
                "w": 600,
                "h": 377,
                "resize": "fit"
              }
            },
            "source_status_id": 790511815633416200,
            "source_status_id_str": "790511815633416192",
            "source_user_id": 741953776190263300,
            "source_user_id_str": "741953776190263300"
          },
          {
            "id": 790511807970484200,
            "id_str": "790511807970484224",
            "indices": [
              22,
              45
            ],
            "media_url": "http://pbs.twimg.com/media/Cvh2TRDVIAAWeYd.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Cvh2TRDVIAAWeYd.jpg",
            "url": "https://t.co/wYbe7POZx6",
            "display_url": "pic.twitter.com/wYbe7POZx6",
            "expanded_url": "https://twitter.com/kusowarotanwwww/status/790511815633416192/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 443,
                "h": 254,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 443,
                "h": 254,
                "resize": "fit"
              },
              "medium": {
                "w": 443,
                "h": 254,
                "resize": "fit"
              }
            },
            "source_status_id": 790511815633416200,
            "source_status_id_str": "790511815633416192",
            "source_user_id": 741953776190263300,
            "source_user_id_str": "741953776190263300"
          },
          {
            "id": 790511807970410500,
            "id_str": "790511807970410497",
            "indices": [
              22,
              45
            ],
            "media_url": "http://pbs.twimg.com/media/Cvh2TRDUAAEPaNy.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Cvh2TRDUAAEPaNy.jpg",
            "url": "https://t.co/wYbe7POZx6",
            "display_url": "pic.twitter.com/wYbe7POZx6",
            "expanded_url": "https://twitter.com/kusowarotanwwww/status/790511815633416192/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 1200,
                "h": 695,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 394,
                "resize": "fit"
              },
              "large": {
                "w": 1200,
                "h": 695,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              }
            },
            "source_status_id": 790511815633416200,
            "source_status_id_str": "790511815633416192",
            "source_user_id": 741953776190263300,
            "source_user_id_str": "741953776190263300"
          }
        ]
      },
      "source": "<a href=\"http://twittbot.net/\" rel=\"nofollow\">twittbot.net</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 188466155,
        "id_str": "188466155",
        "name": "【爆笑】高校生おもしろ動画",
        "screen_name": "FCdoPB",
        "location": "",
        "description": "高校生たちのおもしろ動画を拾い集めました！ 笑ってしまったあなた！是非RT&お気に入りを☆",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 115194,
        "friends_count": 0,
        "listed_count": 125,
        "created_at": "Wed Sep 08 20:09:03 +0000 2010",
        "favourites_count": 0,
        "utc_offset": 32400,
        "time_zone": "Tokyo",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 19849,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/615383855273414657/7QkSkgG3_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/615383855273414657/7QkSkgG3_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/188466155/1449885046",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 748,
      "favorite_count": 1381,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 748,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:13:37 +0000 2017",
    "id": 830781910578196500,
    "id_str": "830781910578196485",
    "text": "@wakameeeees まだ最終再臨してないのは甘え……",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "wakameeeees",
          "name": "かいぞー",
          "id": 1515785034,
          "id_str": "1515785034",
          "indices": [
            0,
            12
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": 830781669481205800,
    "in_reply_to_status_id_str": "830781669481205761",
    "in_reply_to_user_id": 1515785034,
    "in_reply_to_user_id_str": "1515785034",
    "in_reply_to_screen_name": "wakameeeees",
    "user": {
      "id": 2252222857,
      "id_str": "2252222857",
      "name": "シス",
      "screen_name": "aplysia0",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 116,
      "friends_count": 146,
      "listed_count": 1,
      "created_at": "Wed Dec 18 16:17:22 +0000 2013",
      "favourites_count": 13052,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 53789,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2252222857/1432711472",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:20:49 +0000 2017",
    "id": 830783723251474400,
    "id_str": "830783723251474432",
    "text": "Qちんちんが凍ると何になる？Aコチンコチン",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twittbot.net/\" rel=\"nofollow\">twittbot.net</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 2215910204,
      "id_str": "2215910204",
      "name": "クソなぞなぞbot",
      "screen_name": "KUSO_NAZO_BOT",
      "location": "",
      "description": "クソなぞなぞを3時間ごとにつぶやきます。あまり深く考えないでください。皆様からのクソなぞなぞを募集しています。メールフォームからどうぞ　→　http://t.co/F66oVzj2sf",
      "url": null,
      "entities": {
        "description": {
          "urls": [
            {
              "url": "http://t.co/F66oVzj2sf",
              "expanded_url": "http://form1.fc2.com/form/?id=885320",
              "display_url": "form1.fc2.com/form/?id=885320",
              "indices": [
                70,
                92
              ]
            }
          ]
        }
      },
      "protected": false,
      "followers_count": 34254,
      "friends_count": 3956,
      "listed_count": 677,
      "created_at": "Tue Nov 26 15:28:58 +0000 2013",
      "favourites_count": 1,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 9757,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/416233300772933632/S2rYCNdG_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/416233300772933632/S2rYCNdG_normal.jpeg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 163,
    "favorite_count": 137,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:22:48 +0000 2017",
    "id": 830784224101699600,
    "id_str": "830784224101699584",
    "text": "@yryr_jump @501erica いやあ、そんなにないですよ☺️",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "yryr_jump",
          "name": "ひゆーが@青空のラプソディ",
          "id": 1694085883,
          "id_str": "1694085883",
          "indices": [
            0,
            10
          ]
        },
        {
          "screen_name": "501erica",
          "name": "Cure Erica",
          "id": 291061529,
          "id_str": "291061529",
          "indices": [
            11,
            20
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://tapbots.com/tweetbot\" rel=\"nofollow\">Tweetbot for iΟS</a>",
    "in_reply_to_status_id": 830780041092948000,
    "in_reply_to_status_id_str": "830780041092947970",
    "in_reply_to_user_id": 1694085883,
    "in_reply_to_user_id_str": "1694085883",
    "in_reply_to_screen_name": "yryr_jump",
    "user": {
      "id": 2467616982,
      "id_str": "2467616982",
      "name": "ひじひじ@春から理科大OS科",
      "screen_name": "hijiritus",
      "location": "Miki, Hyogo ⇔ Tokyo(川の向こう)",
      "description": "蜻蛉→TUS/SJ, chibi lab.14",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 118,
      "friends_count": 118,
      "listed_count": 5,
      "created_at": "Mon Apr 28 11:39:34 +0000 2014",
      "favourites_count": 4644,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 7665,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/812902981095989250/tucm-_Fb_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/812902981095989250/tucm-_Fb_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2467616982/1451349202",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:25:17 +0000 2017",
    "id": 830784848864219100,
    "id_str": "830784848864219138",
    "text": "高校以降、全然自撮りをしなくなり普段も出かける前とトイレでしかチェックしないのはもうおじさんらしい。これからはiPhone越しでも確認して意識高めで行こう。 https://t.co/E64d5pPfhD",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [],
      "media": [
        {
          "id": 830784836444905500,
          "id_str": "830784836444905475",
          "indices": [
            79,
            102
          ],
          "media_url": "http://pbs.twimg.com/media/C4eKaDUUYAMPJDq.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4eKaDUUYAMPJDq.jpg",
          "url": "https://t.co/E64d5pPfhD",
          "display_url": "pic.twitter.com/E64d5pPfhD",
          "expanded_url": "https://twitter.com/kazuten_0819/status/830784848864219138/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 509,
              "h": 680,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 767,
              "h": 1024,
              "resize": "fit"
            },
            "large": {
              "w": 767,
              "h": 1024,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830784836444905500,
          "id_str": "830784836444905475",
          "indices": [
            79,
            102
          ],
          "media_url": "http://pbs.twimg.com/media/C4eKaDUUYAMPJDq.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4eKaDUUYAMPJDq.jpg",
          "url": "https://t.co/E64d5pPfhD",
          "display_url": "pic.twitter.com/E64d5pPfhD",
          "expanded_url": "https://twitter.com/kazuten_0819/status/830784848864219138/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 509,
              "h": 680,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 767,
              "h": 1024,
              "resize": "fit"
            },
            "large": {
              "w": 767,
              "h": 1024,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 303929194,
      "id_str": "303929194",
      "name": "かずてん",
      "screen_name": "kazuten_0819",
      "location": "埼玉/秩父→東京",
      "description": "農工/日大/大学3年生/Disney/Movie/Nikon/GoPro/Framboise. https://t.co/6xIzxZqaKQ",
      "url": null,
      "entities": {
        "description": {
          "urls": [
            {
              "url": "https://t.co/6xIzxZqaKQ",
              "expanded_url": "https://www.instagram.com/disneyphoto348/?hl=ja",
              "display_url": "instagram.com/disneyphoto348…",
              "indices": [
                48,
                71
              ]
            }
          ]
        }
      },
      "protected": true,
      "followers_count": 338,
      "friends_count": 423,
      "listed_count": 5,
      "created_at": "Mon May 23 17:08:27 +0000 2011",
      "favourites_count": 2161,
      "utc_offset": -36000,
      "time_zone": "Hawaii",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 8625,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "DBE9ED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme17/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme17/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/820683929296322560/SevKs3IF_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/820683929296322560/SevKs3IF_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/303929194/1486074746",
      "profile_link_color": "CC3366",
      "profile_sidebar_border_color": "DBE9ED",
      "profile_sidebar_fill_color": "E6F6F9",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 2,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:28:59 +0000 2017",
    "id": 830785779009851400,
    "id_str": "830785779009851393",
    "text": "RT @imas_anime: 【アイドルマスター SideM　アニメ化決定！】\nアニメ化発表した瞬間の幕張メッセ イベントホール会場の様子です！ #sideM https://t.co/msbfKoKsM7",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "sideM",
          "indices": [
            74,
            80
          ]
        }
      ],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "imas_anime",
          "name": "アイドルマスター",
          "id": 230095408,
          "id_str": "230095408",
          "indices": [
            3,
            14
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 830767407664738300,
          "id_str": "830767407664738307",
          "indices": [
            81,
            104
          ],
          "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/830767407664738307/pu/img/pErqg-HA2gCYhBhZ.jpg",
          "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/830767407664738307/pu/img/pErqg-HA2gCYhBhZ.jpg",
          "url": "https://t.co/msbfKoKsM7",
          "display_url": "pic.twitter.com/msbfKoKsM7",
          "expanded_url": "https://twitter.com/imas_anime/status/830767940836298753/video/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 600,
              "h": 338,
              "resize": "fit"
            },
            "small": {
              "w": 340,
              "h": 191,
              "resize": "fit"
            },
            "large": {
              "w": 1024,
              "h": 576,
              "resize": "fit"
            }
          },
          "source_status_id": 830767940836298800,
          "source_status_id_str": "830767940836298753",
          "source_user_id": 230095408,
          "source_user_id_str": "230095408"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830767407664738300,
          "id_str": "830767407664738307",
          "indices": [
            81,
            104
          ],
          "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/830767407664738307/pu/img/pErqg-HA2gCYhBhZ.jpg",
          "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/830767407664738307/pu/img/pErqg-HA2gCYhBhZ.jpg",
          "url": "https://t.co/msbfKoKsM7",
          "display_url": "pic.twitter.com/msbfKoKsM7",
          "expanded_url": "https://twitter.com/imas_anime/status/830767940836298753/video/1",
          "type": "video",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 600,
              "h": 338,
              "resize": "fit"
            },
            "small": {
              "w": 340,
              "h": 191,
              "resize": "fit"
            },
            "large": {
              "w": 1024,
              "h": 576,
              "resize": "fit"
            }
          },
          "source_status_id": 830767940836298800,
          "source_status_id_str": "830767940836298753",
          "source_user_id": 230095408,
          "source_user_id_str": "230095408",
          "video_info": {
            "aspect_ratio": [
              16,
              9
            ],
            "duration_millis": 75333,
            "variants": [
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/830767407664738307/pu/pl/zAYR9saJUcPaLbT6.m3u8"
              },
              {
                "bitrate": 320000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/830767407664738307/pu/vid/320x180/Jue87Z3SbByabrZl.mp4"
              },
              {
                "bitrate": 832000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/830767407664738307/pu/vid/640x360/qQiaVwbW8ziB2V3K.mp4"
              },
              {
                "content_type": "application/dash+xml",
                "url": "https://video.twimg.com/ext_tw_video/830767407664738307/pu/pl/zAYR9saJUcPaLbT6.mpd"
              },
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/830767407664738307/pu/vid/1280x720/PzovC6F4ZrTwu1gr.mp4"
              }
            ]
          },
          "additional_media_info": {
            "monetizable": false,
            "source_user": {
              "id": 230095408,
              "id_str": "230095408",
              "name": "アイドルマスター",
              "screen_name": "imas_anime",
              "location": "",
              "description": "『アイドルマスター アニメプロジェクト』公式アカウントです。",
              "url": "http://t.co/JWSUgwEdm6",
              "entities": {
                "url": {
                  "urls": [
                    {
                      "url": "http://t.co/JWSUgwEdm6",
                      "expanded_url": "http://imas-anime-project.com",
                      "display_url": "imas-anime-project.com",
                      "indices": [
                        0,
                        22
                      ]
                    }
                  ]
                },
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 203266,
              "friends_count": 7,
              "listed_count": 5337,
              "created_at": "Fri Dec 24 07:32:57 +0000 2010",
              "favourites_count": 40,
              "utc_offset": 32400,
              "time_zone": "Tokyo",
              "geo_enabled": false,
              "verified": false,
              "statuses_count": 5750,
              "lang": "ja",
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "C0DEED",
              "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/538366372154077184/vAXFlu2y.jpeg",
              "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/538366372154077184/vAXFlu2y.jpeg",
              "profile_background_tile": true,
              "profile_image_url": "http://pbs.twimg.com/profile_images/538365006903910401/3u8n-us-_normal.png",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/538365006903910401/3u8n-us-_normal.png",
              "profile_link_color": "0084B4",
              "profile_sidebar_border_color": "C0DEED",
              "profile_sidebar_fill_color": "DDEEF6",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": false,
              "default_profile": false,
              "default_profile_image": false,
              "following": false,
              "follow_request_sent": false,
              "notifications": false,
              "translator_type": "none"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1274924040,
      "id_str": "1274924040",
      "name": "なばゆう@3/18fripSideSSA",
      "screen_name": "funky_nabasan",
      "location": "茨城県守谷市 ⇔ 東京都新宿区神楽坂",
      "description": "けやき/竜一/東進柏(暗黒の浪人期)/東京理科大理学部応用数学科/\n趣味はアニメとかアニソンとか野球、サッカーとか/アニソンライブによく行きます。南條愛乃、綾野ましろ、高垣彩陽、水樹奈々好きです",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 228,
      "friends_count": 334,
      "listed_count": 3,
      "created_at": "Sun Mar 17 13:10:32 +0000 2013",
      "favourites_count": 7980,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 29221,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5ABB5",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1274924040/1482655391",
      "profile_link_color": "3B94D9",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E3E2DE",
      "profile_text_color": "634047",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Feb 12 13:18:06 +0000 2017",
      "id": 830767940836298800,
      "id_str": "830767940836298753",
      "text": "【アイドルマスター SideM　アニメ化決定！】\nアニメ化発表した瞬間の幕張メッセ イベントホール会場の様子です！ #sideM https://t.co/msbfKoKsM7",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "sideM",
            "indices": [
              58,
              64
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 830767407664738300,
            "id_str": "830767407664738307",
            "indices": [
              65,
              88
            ],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/830767407664738307/pu/img/pErqg-HA2gCYhBhZ.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/830767407664738307/pu/img/pErqg-HA2gCYhBhZ.jpg",
            "url": "https://t.co/msbfKoKsM7",
            "display_url": "pic.twitter.com/msbfKoKsM7",
            "expanded_url": "https://twitter.com/imas_anime/status/830767940836298753/video/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 600,
                "h": 338,
                "resize": "fit"
              },
              "small": {
                "w": 340,
                "h": 191,
                "resize": "fit"
              },
              "large": {
                "w": 1024,
                "h": 576,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 830767407664738300,
            "id_str": "830767407664738307",
            "indices": [
              65,
              88
            ],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/830767407664738307/pu/img/pErqg-HA2gCYhBhZ.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/830767407664738307/pu/img/pErqg-HA2gCYhBhZ.jpg",
            "url": "https://t.co/msbfKoKsM7",
            "display_url": "pic.twitter.com/msbfKoKsM7",
            "expanded_url": "https://twitter.com/imas_anime/status/830767940836298753/video/1",
            "type": "video",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 600,
                "h": 338,
                "resize": "fit"
              },
              "small": {
                "w": 340,
                "h": 191,
                "resize": "fit"
              },
              "large": {
                "w": 1024,
                "h": 576,
                "resize": "fit"
              }
            },
            "video_info": {
              "aspect_ratio": [
                16,
                9
              ],
              "duration_millis": 75333,
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/830767407664738307/pu/pl/zAYR9saJUcPaLbT6.m3u8"
                },
                {
                  "bitrate": 320000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/830767407664738307/pu/vid/320x180/Jue87Z3SbByabrZl.mp4"
                },
                {
                  "bitrate": 832000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/830767407664738307/pu/vid/640x360/qQiaVwbW8ziB2V3K.mp4"
                },
                {
                  "content_type": "application/dash+xml",
                  "url": "https://video.twimg.com/ext_tw_video/830767407664738307/pu/pl/zAYR9saJUcPaLbT6.mpd"
                },
                {
                  "bitrate": 2176000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/830767407664738307/pu/vid/1280x720/PzovC6F4ZrTwu1gr.mp4"
                }
              ]
            },
            "additional_media_info": {
              "monetizable": false
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 230095408,
        "id_str": "230095408",
        "name": "アイドルマスター",
        "screen_name": "imas_anime",
        "location": "",
        "description": "『アイドルマスター アニメプロジェクト』公式アカウントです。",
        "url": "http://t.co/JWSUgwEdm6",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/JWSUgwEdm6",
                "expanded_url": "http://imas-anime-project.com",
                "display_url": "imas-anime-project.com",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 203266,
        "friends_count": 7,
        "listed_count": 5337,
        "created_at": "Fri Dec 24 07:32:57 +0000 2010",
        "favourites_count": 40,
        "utc_offset": 32400,
        "time_zone": "Tokyo",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 5750,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/538366372154077184/vAXFlu2y.jpeg",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/538366372154077184/vAXFlu2y.jpeg",
        "profile_background_tile": true,
        "profile_image_url": "http://pbs.twimg.com/profile_images/538365006903910401/3u8n-us-_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/538365006903910401/3u8n-us-_normal.png",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 11770,
      "favorite_count": 10979,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 11770,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:29:28 +0000 2017",
    "id": 830785901852700700,
    "id_str": "830785901852700672",
    "text": "さすがに女性オタ多いねSideM",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1274924040,
      "id_str": "1274924040",
      "name": "なばゆう@3/18fripSideSSA",
      "screen_name": "funky_nabasan",
      "location": "茨城県守谷市 ⇔ 東京都新宿区神楽坂",
      "description": "けやき/竜一/東進柏(暗黒の浪人期)/東京理科大理学部応用数学科/\n趣味はアニメとかアニソンとか野球、サッカーとか/アニソンライブによく行きます。南條愛乃、綾野ましろ、高垣彩陽、水樹奈々好きです",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 228,
      "friends_count": 334,
      "listed_count": 3,
      "created_at": "Sun Mar 17 13:10:32 +0000 2013",
      "favourites_count": 7980,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 29221,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5ABB5",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1274924040/1482655391",
      "profile_link_color": "3B94D9",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E3E2DE",
      "profile_text_color": "634047",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:29:38 +0000 2017",
    "id": 830785942575124500,
    "id_str": "830785942575124480",
    "text": "RT @mockroot: カワウソのジャグリング見てたら全部どうでもよくなってきた https://t.co/bf25B9ymJy https://t.co/qiG4XPP5SA",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "mockroot",
          "name": "山下",
          "id": 724360962,
          "id_str": "724360962",
          "indices": [
            3,
            12
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/bf25B9ymJy",
          "expanded_url": "https://youtu.be/a0r6Qvz3Eoo",
          "display_url": "youtu.be/a0r6Qvz3Eoo",
          "indices": [
            43,
            66
          ]
        }
      ],
      "media": [
        {
          "id": 766268993992654800,
          "id_str": "766268993992654848",
          "indices": [
            67,
            90
          ],
          "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/766268993992654848/pu/img/baBYO4KwLNVRAHeK.jpg",
          "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/766268993992654848/pu/img/baBYO4KwLNVRAHeK.jpg",
          "url": "https://t.co/qiG4XPP5SA",
          "display_url": "pic.twitter.com/qiG4XPP5SA",
          "expanded_url": "https://twitter.com/mockroot/status/766269357949194240/video/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 600,
              "h": 338,
              "resize": "fit"
            },
            "small": {
              "w": 340,
              "h": 191,
              "resize": "fit"
            },
            "large": {
              "w": 640,
              "h": 360,
              "resize": "fit"
            }
          },
          "source_status_id": 766269357949194200,
          "source_status_id_str": "766269357949194240",
          "source_user_id": 724360962,
          "source_user_id_str": "724360962"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 766268993992654800,
          "id_str": "766268993992654848",
          "indices": [
            67,
            90
          ],
          "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/766268993992654848/pu/img/baBYO4KwLNVRAHeK.jpg",
          "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/766268993992654848/pu/img/baBYO4KwLNVRAHeK.jpg",
          "url": "https://t.co/qiG4XPP5SA",
          "display_url": "pic.twitter.com/qiG4XPP5SA",
          "expanded_url": "https://twitter.com/mockroot/status/766269357949194240/video/1",
          "type": "video",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 600,
              "h": 338,
              "resize": "fit"
            },
            "small": {
              "w": 340,
              "h": 191,
              "resize": "fit"
            },
            "large": {
              "w": 640,
              "h": 360,
              "resize": "fit"
            }
          },
          "source_status_id": 766269357949194200,
          "source_status_id_str": "766269357949194240",
          "source_user_id": 724360962,
          "source_user_id_str": "724360962",
          "video_info": {
            "aspect_ratio": [
              16,
              9
            ],
            "duration_millis": 65240,
            "variants": [
              {
                "bitrate": 320000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/766268993992654848/pu/vid/320x180/i-jGK97l8aWLlkZa.mp4"
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/766268993992654848/pu/pl/Foqz7NDnVbK7VfQj.m3u8"
              },
              {
                "bitrate": 832000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/766268993992654848/pu/vid/640x360/kLRgce5wCO6QEEyP.mp4"
              },
              {
                "content_type": "application/dash+xml",
                "url": "https://video.twimg.com/ext_tw_video/766268993992654848/pu/pl/Foqz7NDnVbK7VfQj.mpd"
              }
            ]
          },
          "additional_media_info": {
            "monetizable": false,
            "source_user": {
              "id": 724360962,
              "id_str": "724360962",
              "name": "山下",
              "screen_name": "mockroot",
              "location": "",
              "description": "冬",
              "url": null,
              "entities": {
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 417,
              "friends_count": 229,
              "listed_count": 5,
              "created_at": "Sun Jul 29 17:42:12 +0000 2012",
              "favourites_count": 30386,
              "utc_offset": 32400,
              "time_zone": "Tokyo",
              "geo_enabled": true,
              "verified": false,
              "statuses_count": 1503,
              "lang": "ja",
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "C0DEED",
              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_tile": false,
              "profile_image_url": "http://pbs.twimg.com/profile_images/826443038150979585/5o6i3VFq_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/826443038150979585/5o6i3VFq_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/724360962/1485886382",
              "profile_link_color": "1DA1F2",
              "profile_sidebar_border_color": "C0DEED",
              "profile_sidebar_fill_color": "DDEEF6",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": true,
              "default_profile": true,
              "default_profile_image": false,
              "following": false,
              "follow_request_sent": false,
              "notifications": false,
              "translator_type": "none"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 494897785,
      "id_str": "494897785",
      "name": "もち",
      "screen_name": "mochi_Flappe",
      "location": "(ﾉ)･ω･(ヾ)",
      "description": "Markup Engineer - 格ゲー動画勢。トラック提督。ペットはヤマトヌマエビ。",
      "url": "http://t.co/b18LDiJX85",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "http://t.co/b18LDiJX85",
              "expanded_url": "http://mochiflappe.hatenablog.com",
              "display_url": "mochiflappe.hatenablog.com",
              "indices": [
                0,
                22
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 564,
      "friends_count": 1376,
      "listed_count": 16,
      "created_at": "Fri Feb 17 11:24:27 +0000 2012",
      "favourites_count": 1954,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 5273,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "30C1DB",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/830707220232888321/qv6s2X-P.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/830707220232888321/qv6s2X-P.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/439073624650039296/GuiC9i7l_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/439073624650039296/GuiC9i7l_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/494897785/1371031258",
      "profile_link_color": "0084B4",
      "profile_sidebar_border_color": "BDDCAD",
      "profile_sidebar_fill_color": "DDFFCC",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Thu Aug 18 13:43:46 +0000 2016",
      "id": 766269357949194200,
      "id_str": "766269357949194240",
      "text": "カワウソのジャグリング見てたら全部どうでもよくなってきた https://t.co/bf25B9ymJy https://t.co/qiG4XPP5SA",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/bf25B9ymJy",
            "expanded_url": "https://youtu.be/a0r6Qvz3Eoo",
            "display_url": "youtu.be/a0r6Qvz3Eoo",
            "indices": [
              29,
              52
            ]
          }
        ],
        "media": [
          {
            "id": 766268993992654800,
            "id_str": "766268993992654848",
            "indices": [
              53,
              76
            ],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/766268993992654848/pu/img/baBYO4KwLNVRAHeK.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/766268993992654848/pu/img/baBYO4KwLNVRAHeK.jpg",
            "url": "https://t.co/qiG4XPP5SA",
            "display_url": "pic.twitter.com/qiG4XPP5SA",
            "expanded_url": "https://twitter.com/mockroot/status/766269357949194240/video/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 600,
                "h": 338,
                "resize": "fit"
              },
              "small": {
                "w": 340,
                "h": 191,
                "resize": "fit"
              },
              "large": {
                "w": 640,
                "h": 360,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 766268993992654800,
            "id_str": "766268993992654848",
            "indices": [
              53,
              76
            ],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/766268993992654848/pu/img/baBYO4KwLNVRAHeK.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/766268993992654848/pu/img/baBYO4KwLNVRAHeK.jpg",
            "url": "https://t.co/qiG4XPP5SA",
            "display_url": "pic.twitter.com/qiG4XPP5SA",
            "expanded_url": "https://twitter.com/mockroot/status/766269357949194240/video/1",
            "type": "video",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 600,
                "h": 338,
                "resize": "fit"
              },
              "small": {
                "w": 340,
                "h": 191,
                "resize": "fit"
              },
              "large": {
                "w": 640,
                "h": 360,
                "resize": "fit"
              }
            },
            "video_info": {
              "aspect_ratio": [
                16,
                9
              ],
              "duration_millis": 65240,
              "variants": [
                {
                  "bitrate": 320000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/766268993992654848/pu/vid/320x180/i-jGK97l8aWLlkZa.mp4"
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/766268993992654848/pu/pl/Foqz7NDnVbK7VfQj.m3u8"
                },
                {
                  "bitrate": 832000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/766268993992654848/pu/vid/640x360/kLRgce5wCO6QEEyP.mp4"
                },
                {
                  "content_type": "application/dash+xml",
                  "url": "https://video.twimg.com/ext_tw_video/766268993992654848/pu/pl/Foqz7NDnVbK7VfQj.mpd"
                }
              ]
            },
            "additional_media_info": {
              "monetizable": false
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 724360962,
        "id_str": "724360962",
        "name": "山下",
        "screen_name": "mockroot",
        "location": "",
        "description": "冬",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 417,
        "friends_count": 229,
        "listed_count": 5,
        "created_at": "Sun Jul 29 17:42:12 +0000 2012",
        "favourites_count": 30386,
        "utc_offset": 32400,
        "time_zone": "Tokyo",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 1503,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/826443038150979585/5o6i3VFq_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/826443038150979585/5o6i3VFq_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/724360962/1485886382",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 92553,
      "favorite_count": 113701,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 92553,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:31:13 +0000 2017",
    "id": 830786342187520000,
    "id_str": "830786342187520000",
    "text": "あるえ？どうやって使用するのかわかんねぇ",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:31:50 +0000 2017",
    "id": 830786497527701500,
    "id_str": "830786497527701504",
    "text": "RT @love_chunchn: 【Aqours 1st Live】\n\n【求】25日(1日目)座席不問の2連\n\n【譲】定価+手数料+応相談\n\n難しいとは思いますが立ち見席でも何でも良いので、とにかく現地に行きたいと考えております。。。何卒よろしくお願いしますm(__)m",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "love_chunchn",
          "name": "緑のざー@チョコ祭り♪",
          "id": 3251520846,
          "id_str": "3251520846",
          "indices": [
            3,
            16
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1353943728,
      "id_str": "1353943728",
      "name": "せきや＠エイルメイト",
      "screen_name": "sekiya0512",
      "location": "",
      "description": "D灰/SAO/豊崎愛生/言の葉の庭/藍井エイル/焼きたてジャぱん/fate/グリザイア/Aimer/分島花音/GARNiDELiA",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 168,
      "friends_count": 222,
      "listed_count": 5,
      "created_at": "Mon Apr 15 09:49:10 +0000 2013",
      "favourites_count": 112,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 9340,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/824170491917254656/3RSsnuii_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/824170491917254656/3RSsnuii_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1353943728/1478408962",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Feb 12 14:17:19 +0000 2017",
      "id": 830782844213485600,
      "id_str": "830782844213485569",
      "text": "【Aqours 1st Live】\n\n【求】25日(1日目)座席不問の2連\n\n【譲】定価+手数料+応相談\n\n難しいとは思いますが立ち見席でも何でも良いので、とにかく現地に行きたいと考えております。。。何卒よろしくお願いしますm(__)m",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": []
      },
      "source": "<a href=\"http://twipple.jp/\" rel=\"nofollow\">ついっぷる for Android</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 3251520846,
        "id_str": "3251520846",
        "name": "緑のざー@Aqours迷子中……",
        "screen_name": "love_chunchn",
        "location": "",
        "description": "愛生ちゃあああああああぁぁぁああん",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 118,
        "friends_count": 108,
        "listed_count": 11,
        "created_at": "Sun Jun 21 11:59:18 +0000 2015",
        "favourites_count": 637,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 1934,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/814793462742532096/BnOfWpVE_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/814793462742532096/BnOfWpVE_normal.jpg",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 19,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 19,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:34:33 +0000 2017",
    "id": 830787181048311800,
    "id_str": "830787181048311809",
    "text": "また大文字小文字問題か",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 135861531,
      "id_str": "135861531",
      "name": "kyasbal",
      "screen_name": "kyasbal_1994",
      "location": "",
      "description": "WebGL/Node.js    未踏2016 Grimoire.js開発者",
      "url": "https://t.co/rIxxaN4fqz",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/rIxxaN4fqz",
              "expanded_url": "http://github.com/kyasbal-1994",
              "display_url": "github.com/kyasbal-1994",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 332,
      "friends_count": 194,
      "listed_count": 20,
      "created_at": "Thu Apr 22 12:18:21 +0000 2010",
      "favourites_count": 3009,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 9544,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0033FF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/135861531/1431678704",
      "profile_link_color": "4A913C",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:35:16 +0000 2017",
    "id": 830787359666888700,
    "id_str": "830787359666888705",
    "text": "クソすぎる。なぜFoldernameと言う名前のフォルダでpublishしてるのに、foldernameになって落ちてくるのか",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 135861531,
      "id_str": "135861531",
      "name": "kyasbal",
      "screen_name": "kyasbal_1994",
      "location": "",
      "description": "WebGL/Node.js    未踏2016 Grimoire.js開発者",
      "url": "https://t.co/rIxxaN4fqz",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/rIxxaN4fqz",
              "expanded_url": "http://github.com/kyasbal-1994",
              "display_url": "github.com/kyasbal-1994",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 332,
      "friends_count": 194,
      "listed_count": 20,
      "created_at": "Thu Apr 22 12:18:21 +0000 2010",
      "favourites_count": 3009,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 9544,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0033FF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/135861531/1431678704",
      "profile_link_color": "4A913C",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:35:59 +0000 2017",
    "id": 830787539967414300,
    "id_str": "830787539967414272",
    "text": "RT @VWI9u: くだらなすぎて流石に笑う https://t.co/H6GVYLubmr",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "VWI9u",
          "name": "JK嬢",
          "id": 813263372128919600,
          "id_str": "813263372128919552",
          "indices": [
            3,
            9
          ]
        }
      ],
      "urls": [],
      "media": [
        {
          "id": 830357663481409500,
          "id_str": "830357663481409537",
          "indices": [
            24,
            47
          ],
          "media_url": "http://pbs.twimg.com/media/C4YF5UBVMAEmPhy.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4YF5UBVMAEmPhy.jpg",
          "url": "https://t.co/H6GVYLubmr",
          "display_url": "pic.twitter.com/H6GVYLubmr",
          "expanded_url": "https://twitter.com/VWI9u/status/830357679918813184/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 477,
              "h": 441,
              "resize": "fit"
            },
            "medium": {
              "w": 477,
              "h": 441,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 477,
              "h": 441,
              "resize": "fit"
            }
          },
          "source_status_id": 830357679918813200,
          "source_status_id_str": "830357679918813184",
          "source_user_id": 813263372128919600,
          "source_user_id_str": "813263372128919552"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830357663481409500,
          "id_str": "830357663481409537",
          "indices": [
            24,
            47
          ],
          "media_url": "http://pbs.twimg.com/media/C4YF5UBVMAEmPhy.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4YF5UBVMAEmPhy.jpg",
          "url": "https://t.co/H6GVYLubmr",
          "display_url": "pic.twitter.com/H6GVYLubmr",
          "expanded_url": "https://twitter.com/VWI9u/status/830357679918813184/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 477,
              "h": 441,
              "resize": "fit"
            },
            "medium": {
              "w": 477,
              "h": 441,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 477,
              "h": 441,
              "resize": "fit"
            }
          },
          "source_status_id": 830357679918813200,
          "source_status_id_str": "830357679918813184",
          "source_user_id": 813263372128919600,
          "source_user_id_str": "813263372128919552"
        },
        {
          "id": 830357663514910700,
          "id_str": "830357663514910720",
          "indices": [
            24,
            47
          ],
          "media_url": "http://pbs.twimg.com/media/C4YF5UJUYAA_rUs.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4YF5UJUYAA_rUs.jpg",
          "url": "https://t.co/H6GVYLubmr",
          "display_url": "pic.twitter.com/H6GVYLubmr",
          "expanded_url": "https://twitter.com/VWI9u/status/830357679918813184/photo/1",
          "type": "photo",
          "sizes": {
            "small": {
              "w": 640,
              "h": 519,
              "resize": "fit"
            },
            "large": {
              "w": 640,
              "h": 519,
              "resize": "fit"
            },
            "medium": {
              "w": 640,
              "h": 519,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            }
          },
          "source_status_id": 830357679918813200,
          "source_status_id_str": "830357679918813184",
          "source_user_id": 813263372128919600,
          "source_user_id_str": "813263372128919552"
        },
        {
          "id": 830357663586230300,
          "id_str": "830357663586230273",
          "indices": [
            24,
            47
          ],
          "media_url": "http://pbs.twimg.com/media/C4YF5UaUoAEBT7E.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4YF5UaUoAEBT7E.jpg",
          "url": "https://t.co/H6GVYLubmr",
          "display_url": "pic.twitter.com/H6GVYLubmr",
          "expanded_url": "https://twitter.com/VWI9u/status/830357679918813184/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 373,
              "h": 676,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 373,
              "h": 676,
              "resize": "fit"
            },
            "small": {
              "w": 373,
              "h": 676,
              "resize": "fit"
            }
          },
          "source_status_id": 830357679918813200,
          "source_status_id_str": "830357679918813184",
          "source_user_id": 813263372128919600,
          "source_user_id_str": "813263372128919552"
        },
        {
          "id": 830357663552725000,
          "id_str": "830357663552724992",
          "indices": [
            24,
            47
          ],
          "media_url": "http://pbs.twimg.com/media/C4YF5USVYAAG2uF.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4YF5USVYAAG2uF.jpg",
          "url": "https://t.co/H6GVYLubmr",
          "display_url": "pic.twitter.com/H6GVYLubmr",
          "expanded_url": "https://twitter.com/VWI9u/status/830357679918813184/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 373,
              "h": 673,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "large": {
              "w": 373,
              "h": 673,
              "resize": "fit"
            },
            "small": {
              "w": 373,
              "h": 673,
              "resize": "fit"
            }
          },
          "source_status_id": 830357679918813200,
          "source_status_id_str": "830357679918813184",
          "source_user_id": 813263372128919600,
          "source_user_id_str": "813263372128919552"
        }
      ]
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1274924040,
      "id_str": "1274924040",
      "name": "なばゆう@3/18fripSideSSA",
      "screen_name": "funky_nabasan",
      "location": "茨城県守谷市 ⇔ 東京都新宿区神楽坂",
      "description": "けやき/竜一/東進柏(暗黒の浪人期)/東京理科大理学部応用数学科/\n趣味はアニメとかアニソンとか野球、サッカーとか/アニソンライブによく行きます。南條愛乃、綾野ましろ、高垣彩陽、水樹奈々好きです",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 228,
      "friends_count": 334,
      "listed_count": 3,
      "created_at": "Sun Mar 17 13:10:32 +0000 2013",
      "favourites_count": 7980,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 29221,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5ABB5",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1274924040/1482655391",
      "profile_link_color": "3B94D9",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E3E2DE",
      "profile_text_color": "634047",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sat Feb 11 10:07:52 +0000 2017",
      "id": 830357679918813200,
      "id_str": "830357679918813184",
      "text": "くだらなすぎて流石に笑う https://t.co/H6GVYLubmr",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 830357663481409500,
            "id_str": "830357663481409537",
            "indices": [
              13,
              36
            ],
            "media_url": "http://pbs.twimg.com/media/C4YF5UBVMAEmPhy.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4YF5UBVMAEmPhy.jpg",
            "url": "https://t.co/H6GVYLubmr",
            "display_url": "pic.twitter.com/H6GVYLubmr",
            "expanded_url": "https://twitter.com/VWI9u/status/830357679918813184/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 477,
                "h": 441,
                "resize": "fit"
              },
              "medium": {
                "w": 477,
                "h": 441,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 477,
                "h": 441,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 830357663481409500,
            "id_str": "830357663481409537",
            "indices": [
              13,
              36
            ],
            "media_url": "http://pbs.twimg.com/media/C4YF5UBVMAEmPhy.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4YF5UBVMAEmPhy.jpg",
            "url": "https://t.co/H6GVYLubmr",
            "display_url": "pic.twitter.com/H6GVYLubmr",
            "expanded_url": "https://twitter.com/VWI9u/status/830357679918813184/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 477,
                "h": 441,
                "resize": "fit"
              },
              "medium": {
                "w": 477,
                "h": 441,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 477,
                "h": 441,
                "resize": "fit"
              }
            }
          },
          {
            "id": 830357663514910700,
            "id_str": "830357663514910720",
            "indices": [
              13,
              36
            ],
            "media_url": "http://pbs.twimg.com/media/C4YF5UJUYAA_rUs.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4YF5UJUYAA_rUs.jpg",
            "url": "https://t.co/H6GVYLubmr",
            "display_url": "pic.twitter.com/H6GVYLubmr",
            "expanded_url": "https://twitter.com/VWI9u/status/830357679918813184/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 640,
                "h": 519,
                "resize": "fit"
              },
              "large": {
                "w": 640,
                "h": 519,
                "resize": "fit"
              },
              "medium": {
                "w": 640,
                "h": 519,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              }
            }
          },
          {
            "id": 830357663586230300,
            "id_str": "830357663586230273",
            "indices": [
              13,
              36
            ],
            "media_url": "http://pbs.twimg.com/media/C4YF5UaUoAEBT7E.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4YF5UaUoAEBT7E.jpg",
            "url": "https://t.co/H6GVYLubmr",
            "display_url": "pic.twitter.com/H6GVYLubmr",
            "expanded_url": "https://twitter.com/VWI9u/status/830357679918813184/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 373,
                "h": 676,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 373,
                "h": 676,
                "resize": "fit"
              },
              "small": {
                "w": 373,
                "h": 676,
                "resize": "fit"
              }
            }
          },
          {
            "id": 830357663552725000,
            "id_str": "830357663552724992",
            "indices": [
              13,
              36
            ],
            "media_url": "http://pbs.twimg.com/media/C4YF5USVYAAG2uF.jpg",
            "media_url_https": "https://pbs.twimg.com/media/C4YF5USVYAAG2uF.jpg",
            "url": "https://t.co/H6GVYLubmr",
            "display_url": "pic.twitter.com/H6GVYLubmr",
            "expanded_url": "https://twitter.com/VWI9u/status/830357679918813184/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 373,
                "h": 673,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 373,
                "h": 673,
                "resize": "fit"
              },
              "small": {
                "w": 373,
                "h": 673,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 813263372128919600,
        "id_str": "813263372128919552",
        "name": "JK嬢",
        "screen_name": "VWI9u",
        "location": "東京 新宿区",
        "description": "手を横にッ👉！！アラ危ないッ😫⚠️！！頭を🤡下げればぶつかりませんッ🤢🙌！！！前のアカウントログインできないからリムって！！！！リプライ消してますごめんなさい🙇",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 19658,
        "friends_count": 41,
        "listed_count": 119,
        "created_at": "Mon Dec 26 06:01:12 +0000 2016",
        "favourites_count": 2497,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 283,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/813263712551211008/OGQJt-gZ_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/813263712551211008/OGQJt-gZ_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/813263372128919552/1486906064",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 40798,
      "favorite_count": 42053,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "possibly_sensitive_appealable": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 40798,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:36:29 +0000 2017",
    "id": 830787664144052200,
    "id_str": "830787664144052225",
    "text": "@aplysia0 おれはガチ勢でない！",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "aplysia0",
          "name": "シス",
          "id": 2252222857,
          "id_str": "2252222857",
          "indices": [
            0,
            9
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": 830781910578196500,
    "in_reply_to_status_id_str": "830781910578196485",
    "in_reply_to_user_id": 2252222857,
    "in_reply_to_user_id_str": "2252222857",
    "in_reply_to_screen_name": "aplysia0",
    "user": {
      "id": 1515785034,
      "id_str": "1515785034",
      "name": "かいぞー",
      "screen_name": "wakameeeees",
      "location": "dasaitama",
      "description": "TUS SJ-A  ANGELINA(@bonbon_cf) インカレー部",
      "url": "https://t.co/hqX1Kkh8vi",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/hqX1Kkh8vi",
              "expanded_url": "https://www.instagram.com/skphotograph.jp/",
              "display_url": "instagram.com/skphotograph.j…",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 382,
      "friends_count": 428,
      "listed_count": 8,
      "created_at": "Fri Jun 14 08:46:54 +0000 2013",
      "favourites_count": 7687,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 13976,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/804279694510034944/ZTDH4oiS_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/804279694510034944/ZTDH4oiS_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1515785034/1399475120",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:37:32 +0000 2017",
    "id": 830787930830495700,
    "id_str": "830787930830495745",
    "text": "すらいむ氏の名前が虚無になっててアクアポニックスの闇を感じる",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 135861531,
      "id_str": "135861531",
      "name": "kyasbal",
      "screen_name": "kyasbal_1994",
      "location": "",
      "description": "WebGL/Node.js    未踏2016 Grimoire.js開発者",
      "url": "https://t.co/rIxxaN4fqz",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/rIxxaN4fqz",
              "expanded_url": "http://github.com/kyasbal-1994",
              "display_url": "github.com/kyasbal-1994",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 332,
      "friends_count": 194,
      "listed_count": 20,
      "created_at": "Thu Apr 22 12:18:21 +0000 2010",
      "favourites_count": 3009,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 9544,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0033FF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/135861531/1431678704",
      "profile_link_color": "4A913C",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:39:21 +0000 2017",
    "id": 830788388693303300,
    "id_str": "830788388693303296",
    "text": "寝過ごすとこだった",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://www.echofon.com/\" rel=\"nofollow\">Echofon</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 96351930,
      "id_str": "96351930",
      "name": "いけーだ",
      "screen_name": "rosalinamronba",
      "location": "",
      "description": "競技かるた/慶應かるた会/A級四段/麻雀/天鳳(IKDZSS     67676)/Vivienne Westwood/水樹奈々/Sound Horizon/Acid Black Cherry",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 1295,
      "friends_count": 1168,
      "listed_count": 59,
      "created_at": "Sat Dec 12 14:28:44 +0000 2009",
      "favourites_count": 11992,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 120952,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "1A1B1F",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/545986588/19230114_1532944300_158large.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/545986588/19230114_1532944300_158large.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/731047169629659136/Gcol2UD6_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/731047169629659136/Gcol2UD6_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/96351930/1471360125",
      "profile_link_color": "2FC2EF",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:39:55 +0000 2017",
    "id": 830788531308023800,
    "id_str": "830788531308023808",
    "text": "お兄ちゃん、メタプログラミングとか、C言語の関数ポインタとか、やたら難しい構文を自慢げに使っているけど、それって自己満足だよね？ お兄ちゃんのやりたいことはもっと簡単な構文で十分実装できるし、その方がメンテナンスもしやすいよ？",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twittbot.net/\" rel=\"nofollow\">twittbot.net</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 493279568,
      "id_str": "493279568",
      "name": "プログラムを勉強している人の毒舌な妹",
      "screen_name": "PG_sister_bot",
      "location": "192.168.0.2",
      "description": "趣味で、仕事で、学校でプログラムを勉強している人の毒舌な妹bot。ハッシュタグ #プログラムを勉強している人の毒舌な妹bot で、良いネタがあれば追加する方向で。作者:@big_bros アイコン提供:すつるむ(@sutsurumu)さん",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 10496,
      "friends_count": 7842,
      "listed_count": 552,
      "created_at": "Wed Feb 15 16:47:14 +0000 2012",
      "favourites_count": 1,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 74494,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1887861869/PG_sister_bot_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1887861869/PG_sister_bot_normal.png",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:42:00 +0000 2017",
    "id": 830789055210090500,
    "id_str": "830789055210090499",
    "text": "しょーたパイセンしっかりプリリズまで見て、\nもう完全にワイよりキンプリガチ勢な体勢じゃないっすかカッコいい…",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1274924040,
      "id_str": "1274924040",
      "name": "なばゆう@3/18fripSideSSA",
      "screen_name": "funky_nabasan",
      "location": "茨城県守谷市 ⇔ 東京都新宿区神楽坂",
      "description": "けやき/竜一/東進柏(暗黒の浪人期)/東京理科大理学部応用数学科/\n趣味はアニメとかアニソンとか野球、サッカーとか/アニソンライブによく行きます。南條愛乃、綾野ましろ、高垣彩陽、水樹奈々好きです",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 228,
      "friends_count": 334,
      "listed_count": 3,
      "created_at": "Sun Mar 17 13:10:32 +0000 2013",
      "favourites_count": 7980,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 29221,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5ABB5",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1274924040/1482655391",
      "profile_link_color": "3B94D9",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E3E2DE",
      "profile_text_color": "634047",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:43:35 +0000 2017",
    "id": 830789451357892600,
    "id_str": "830789451357892612",
    "text": "あー使う前の処理で引っかかってる",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:43:44 +0000 2017",
    "id": 830789491577065500,
    "id_str": "830789491577065473",
    "text": "どうやるんだろう（模索中）",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:43:50 +0000 2017",
    "id": 830789515048415200,
    "id_str": "830789515048415234",
    "text": "@wakameeeees いまからなるんだよ！",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "wakameeeees",
          "name": "かいぞー",
          "id": 1515785034,
          "id_str": "1515785034",
          "indices": [
            0,
            12
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": 830787664144052200,
    "in_reply_to_status_id_str": "830787664144052225",
    "in_reply_to_user_id": 1515785034,
    "in_reply_to_user_id_str": "1515785034",
    "in_reply_to_screen_name": "wakameeeees",
    "user": {
      "id": 2252222857,
      "id_str": "2252222857",
      "name": "シス",
      "screen_name": "aplysia0",
      "location": "",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 116,
      "friends_count": 146,
      "listed_count": 1,
      "created_at": "Wed Dec 18 16:17:22 +0000 2013",
      "favourites_count": 13052,
      "utc_offset": -28800,
      "time_zone": "Pacific Time (US & Canada)",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 53789,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/809626157754687488/q6bba5d3_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2252222857/1432711472",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:44:06 +0000 2017",
    "id": 830789580882223100,
    "id_str": "830789580882223104",
    "text": "コマンド打ちまくってるけど、これはなんか違う気がする",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:44:22 +0000 2017",
    "id": 830789650012794900,
    "id_str": "830789650012794884",
    "text": "なんかcx20さんが作ってくれた。\nhttps://t.co/2T43nqSQFR",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/2T43nqSQFR",
          "expanded_url": "http://jsdo.it/cx20/G2wl",
          "display_url": "jsdo.it/cx20/G2wl",
          "indices": [
            18,
            41
          ]
        }
      ]
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 135861531,
      "id_str": "135861531",
      "name": "kyasbal",
      "screen_name": "kyasbal_1994",
      "location": "",
      "description": "WebGL/Node.js    未踏2016 Grimoire.js開発者",
      "url": "https://t.co/rIxxaN4fqz",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/rIxxaN4fqz",
              "expanded_url": "http://github.com/kyasbal-1994",
              "display_url": "github.com/kyasbal-1994",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 332,
      "friends_count": 194,
      "listed_count": 20,
      "created_at": "Thu Apr 22 12:18:21 +0000 2010",
      "favourites_count": 3009,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 9544,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0033FF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/135861531/1431678704",
      "profile_link_color": "4A913C",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:44:45 +0000 2017",
    "id": 830789746137784300,
    "id_str": "830789746137784326",
    "text": "@hijiritus @501erica マ？？？MRKMさんって人初めて聞いたかも🤔",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "hijiritus",
          "name": "ひじひじ@春から理科大OS科",
          "id": 2467616982,
          "id_str": "2467616982",
          "indices": [
            0,
            10
          ]
        },
        {
          "screen_name": "501erica",
          "name": "Cure Erica",
          "id": 291061529,
          "id_str": "291061529",
          "indices": [
            11,
            20
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://covelline.com/feather/\" rel=\"nofollow\">feather for iOS </a>",
    "in_reply_to_status_id": 830789635848560600,
    "in_reply_to_status_id_str": "830789635848560640",
    "in_reply_to_user_id": 2467616982,
    "in_reply_to_user_id_str": "2467616982",
    "in_reply_to_screen_name": "hijiritus",
    "user": {
      "id": 1694085883,
      "id_str": "1694085883",
      "name": "ひゆーが@青空のラプソディ",
      "screen_name": "yryr_jump",
      "location": "",
      "description": "とあるキモオタ大学に入りますますゆるゆりとデレマスに染まっていく毎日楽しい✌('ω'✌ )三✌('ω')✌三( ✌'ω')✌",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 172,
      "friends_count": 202,
      "listed_count": 5,
      "created_at": "Fri Aug 23 14:57:26 +0000 2013",
      "favourites_count": 2679,
      "utc_offset": 28800,
      "time_zone": "Irkutsk",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 10642,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/781931965331025920/rlQAjPnc_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/781931965331025920/rlQAjPnc_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1694085883/1486873960",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:45:29 +0000 2017",
    "id": 830789929055686700,
    "id_str": "830789929055686656",
    "text": "RT @yuenoman: 最近のTL、「すごーい！」「へーきへーき！フレンズによってとくいなことちがうから！」って全面肯定してると思ったら「ちくしょう台無しにしやがった！」「お前はいつもそうだ」「誰もお前を愛さない」で全部否定に変わるから躁鬱が激しい",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "yuenoman",
          "name": "yueno",
          "id": 1389743336,
          "id_str": "1389743336",
          "indices": [
            3,
            12
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 16783617,
      "id_str": "16783617",
      "name": "Tsuyoshi Yonemoto",
      "screen_name": "yoneapp",
      "location": "Tokyo",
      "description": "RailsとiOSのエンジニアです！iPhoneアプリの標高ワカールを公開中しています",
      "url": "https://t.co/TQNII3BXry",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/TQNII3BXry",
              "expanded_url": "http://yoneapp.com",
              "display_url": "yoneapp.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1771,
      "friends_count": 1083,
      "listed_count": 127,
      "created_at": "Wed Oct 15 15:06:48 +0000 2008",
      "favourites_count": 3427,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 23298,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/822417332609826816/YQ_vMSIZ_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/822417332609826816/YQ_vMSIZ_normal.jpg",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sat Feb 11 15:12:01 +0000 2017",
      "id": 830434218983387100,
      "id_str": "830434218983387138",
      "text": "最近のTL、「すごーい！」「へーきへーき！フレンズによってとくいなことちがうから！」って全面肯定してると思ったら「ちくしょう台無しにしやがった！」「お前はいつもそうだ」「誰もお前を愛さない」で全部否定に変わるから躁鬱が激しい",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": []
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1389743336,
        "id_str": "1389743336",
        "name": "yueno",
        "screen_name": "yuenoman",
        "location": "駿河国",
        "description": "絵とか描きます。20↑。お腐り申し上げております。刀剣は左文字/源氏/数珠丸。文アルはじめました。利一とともに川端を待つ。いろいろと勉強不足。⚠史実と妄想の境が曖昧です⚠ pixiv[https://t.co/lHDxfwwIlU]",
        "url": "https://t.co/X6uKd9td6q",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/X6uKd9td6q",
                "expanded_url": "http://yueno.tumblr.com",
                "display_url": "yueno.tumblr.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": [
              {
                "url": "https://t.co/lHDxfwwIlU",
                "expanded_url": "http://pixiv.me/yueno",
                "display_url": "pixiv.me/yueno",
                "indices": [
                  92,
                  115
                ]
              }
            ]
          }
        },
        "protected": false,
        "followers_count": 1559,
        "friends_count": 760,
        "listed_count": 73,
        "created_at": "Mon Apr 29 15:25:32 +0000 2013",
        "favourites_count": 10213,
        "utc_offset": 32400,
        "time_zone": "Tokyo",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 17155,
        "lang": "ja",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000022620901/75ab39c7ff67667713df682367ce445e.jpeg",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000022620901/75ab39c7ff67667713df682367ce445e.jpeg",
        "profile_background_tile": true,
        "profile_image_url": "http://pbs.twimg.com/profile_images/822493685526822912/-GJfxsP__normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/822493685526822912/-GJfxsP__normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1389743336/1459726103",
        "profile_link_color": "ABB8C2",
        "profile_sidebar_border_color": "FFFFFF",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 9756,
      "favorite_count": 8558,
      "favorited": false,
      "retweeted": false,
      "lang": "ja"
    },
    "is_quote_status": false,
    "retweet_count": 9756,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:45:31 +0000 2017",
    "id": 830789939394547700,
    "id_str": "830789939394547712",
    "text": "このスクリプトを動かすわけじゃなさそう",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:45:32 +0000 2017",
    "id": 830789945270808600,
    "id_str": "830789945270808579",
    "text": "@yryr_jump @501erica そうなんか、俺の周りは村上さんかヒロキかの2択が多かったぞ",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "yryr_jump",
          "name": "ひゆーが@青空のラプソディ",
          "id": 1694085883,
          "id_str": "1694085883",
          "indices": [
            0,
            10
          ]
        },
        {
          "screen_name": "501erica",
          "name": "Cure Erica",
          "id": 291061529,
          "id_str": "291061529",
          "indices": [
            11,
            20
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://tapbots.com/tweetbot\" rel=\"nofollow\">Tweetbot for iΟS</a>",
    "in_reply_to_status_id": 830789746137784300,
    "in_reply_to_status_id_str": "830789746137784326",
    "in_reply_to_user_id": 1694085883,
    "in_reply_to_user_id_str": "1694085883",
    "in_reply_to_screen_name": "yryr_jump",
    "user": {
      "id": 2467616982,
      "id_str": "2467616982",
      "name": "ひじひじ@春から理科大OS科",
      "screen_name": "hijiritus",
      "location": "Miki, Hyogo ⇔ Tokyo(川の向こう)",
      "description": "蜻蛉→TUS/SJ, chibi lab.14",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 118,
      "friends_count": 118,
      "listed_count": 5,
      "created_at": "Mon Apr 28 11:39:34 +0000 2014",
      "favourites_count": 4644,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 7665,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/812902981095989250/tucm-_Fb_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/812902981095989250/tucm-_Fb_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2467616982/1451349202",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:45:46 +0000 2017",
    "id": 830790001294135300,
    "id_str": "830790001294135297",
    "text": "いいよ、もう卒研迷ってるやつらみんなOGSWR行けよ、それで解決だよ。",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1274924040,
      "id_str": "1274924040",
      "name": "なばゆう@3/18fripSideSSA",
      "screen_name": "funky_nabasan",
      "location": "茨城県守谷市 ⇔ 東京都新宿区神楽坂",
      "description": "けやき/竜一/東進柏(暗黒の浪人期)/東京理科大理学部応用数学科/\n趣味はアニメとかアニソンとか野球、サッカーとか/アニソンライブによく行きます。南條愛乃、綾野ましろ、高垣彩陽、水樹奈々好きです",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 228,
      "friends_count": 334,
      "listed_count": 3,
      "created_at": "Sun Mar 17 13:10:32 +0000 2013",
      "favourites_count": 7980,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 29221,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5ABB5",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1274924040/1482655391",
      "profile_link_color": "3B94D9",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E3E2DE",
      "profile_text_color": "634047",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:46:28 +0000 2017",
    "id": 830790179166187500,
    "id_str": "830790179166187522",
    "text": "@funky_nabasan dアニに入ってるから540円で全話観れるで^^",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "funky_nabasan",
          "name": "なばゆう@3/18fripSideSSA",
          "id": 1274924040,
          "id_str": "1274924040",
          "indices": [
            0,
            14
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://covelline.com/feather/\" rel=\"nofollow\">feather for iOS</a>",
    "in_reply_to_status_id": 830789055210090500,
    "in_reply_to_status_id_str": "830789055210090499",
    "in_reply_to_user_id": 1274924040,
    "in_reply_to_user_id_str": "1274924040",
    "in_reply_to_screen_name": "funky_nabasan",
    "user": {
      "id": 2400816728,
      "id_str": "2400816728",
      "name": "のんけ",
      "screen_name": "neruneru_shota",
      "location": "秋葉原に近い大学",
      "description": "アスペお断り垢",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 144,
      "friends_count": 269,
      "listed_count": 6,
      "created_at": "Fri Mar 21 02:47:55 +0000 2014",
      "favourites_count": 15281,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 16910,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/806314985571762176/uoMdcETq_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/806314985571762176/uoMdcETq_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/2400816728/1444575566",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:47:34 +0000 2017",
    "id": 830790453473603600,
    "id_str": "830790453473603584",
    "text": "てめーの悲観に他人を巻き込むなで終了しません？",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://covelline.com/feather/\" rel=\"nofollow\">feather for iOS</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 14048302,
      "id_str": "14048302",
      "name": "FEH:0647075705",
      "screen_name": "berlysia",
      "location": "星見の塔/アンソーシャルネットワーク",
      "description": "麩菓子と柿の種チョコが好きです。ブラウザ周りでコードを書きます。",
      "url": "https://t.co/oR5e41WLvs",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/oR5e41WLvs",
              "expanded_url": "https://github.com/berlysia",
              "display_url": "github.com/berlysia",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1106,
      "friends_count": 976,
      "listed_count": 114,
      "created_at": "Wed Feb 27 11:18:28 +0000 2008",
      "favourites_count": 34403,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 119852,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme3/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme3/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/813225429884489728/Z5YUF_iD_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/813225429884489728/Z5YUF_iD_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/14048302/1400374303",
      "profile_link_color": "5656C0",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:48:24 +0000 2017",
    "id": 830790665910964200,
    "id_str": "830790665910964228",
    "text": "いや、いいですねー。こういう周りの人が作ってくれたサンプルみたいなやつ!",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 135861531,
      "id_str": "135861531",
      "name": "kyasbal",
      "screen_name": "kyasbal_1994",
      "location": "",
      "description": "WebGL/Node.js    未踏2016 Grimoire.js開発者",
      "url": "https://t.co/rIxxaN4fqz",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/rIxxaN4fqz",
              "expanded_url": "http://github.com/kyasbal-1994",
              "display_url": "github.com/kyasbal-1994",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 332,
      "friends_count": 194,
      "listed_count": 20,
      "created_at": "Thu Apr 22 12:18:21 +0000 2010",
      "favourites_count": 3009,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 9544,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0033FF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/135861531/1431678704",
      "profile_link_color": "4A913C",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:49:06 +0000 2017",
    "id": 830790841341849600,
    "id_str": "830790841341849601",
    "text": "@hijiritus @501erica まじか、A組のその辺はやはりそんな感じなのか、",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "hijiritus",
          "name": "ひじひじ@春から理科大OS科",
          "id": 2467616982,
          "id_str": "2467616982",
          "indices": [
            0,
            10
          ]
        },
        {
          "screen_name": "501erica",
          "name": "Cure Erica",
          "id": 291061529,
          "id_str": "291061529",
          "indices": [
            11,
            20
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://covelline.com/feather/\" rel=\"nofollow\">feather for iOS </a>",
    "in_reply_to_status_id": 830789945270808600,
    "in_reply_to_status_id_str": "830789945270808579",
    "in_reply_to_user_id": 2467616982,
    "in_reply_to_user_id_str": "2467616982",
    "in_reply_to_screen_name": "hijiritus",
    "user": {
      "id": 1694085883,
      "id_str": "1694085883",
      "name": "ひゆーが@青空のラプソディ",
      "screen_name": "yryr_jump",
      "location": "",
      "description": "とあるキモオタ大学に入りますますゆるゆりとデレマスに染まっていく毎日楽しい✌('ω'✌ )三✌('ω')✌三( ✌'ω')✌",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 172,
      "friends_count": 202,
      "listed_count": 5,
      "created_at": "Fri Aug 23 14:57:26 +0000 2013",
      "favourites_count": 2679,
      "utc_offset": 28800,
      "time_zone": "Irkutsk",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 10642,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/781931965331025920/rlQAjPnc_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/781931965331025920/rlQAjPnc_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1694085883/1486873960",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:50:44 +0000 2017",
    "id": 830791253532880900,
    "id_str": "830791253532880897",
    "text": "こういうの無指向性に飛んでくからよくないな。",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://covelline.com/feather/\" rel=\"nofollow\">feather for iOS</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 14048302,
      "id_str": "14048302",
      "name": "FEH:0647075705",
      "screen_name": "berlysia",
      "location": "星見の塔/アンソーシャルネットワーク",
      "description": "麩菓子と柿の種チョコが好きです。ブラウザ周りでコードを書きます。",
      "url": "https://t.co/oR5e41WLvs",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/oR5e41WLvs",
              "expanded_url": "https://github.com/berlysia",
              "display_url": "github.com/berlysia",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1106,
      "friends_count": 976,
      "listed_count": 114,
      "created_at": "Wed Feb 27 11:18:28 +0000 2008",
      "favourites_count": 34403,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 119852,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "000000",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme3/bg.gif",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme3/bg.gif",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/813225429884489728/Z5YUF_iD_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/813225429884489728/Z5YUF_iD_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/14048302/1400374303",
      "profile_link_color": "5656C0",
      "profile_sidebar_border_color": "000000",
      "profile_sidebar_fill_color": "000000",
      "profile_text_color": "000000",
      "profile_use_background_image": false,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:52:37 +0000 2017",
    "id": 830791727581536300,
    "id_str": "830791727581536256",
    "text": "何も増えてないってことは、何も生成されてないってことだよなぁ",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 14:54:39 +0000 2017",
    "id": 830792236442923000,
    "id_str": "830792236442923008",
    "text": "CI息してない",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 135861531,
      "id_str": "135861531",
      "name": "kyasbal",
      "screen_name": "kyasbal_1994",
      "location": "",
      "description": "WebGL/Node.js    未踏2016 Grimoire.js開発者",
      "url": "https://t.co/rIxxaN4fqz",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/rIxxaN4fqz",
              "expanded_url": "http://github.com/kyasbal-1994",
              "display_url": "github.com/kyasbal-1994",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 332,
      "friends_count": 194,
      "listed_count": 20,
      "created_at": "Thu Apr 22 12:18:21 +0000 2010",
      "favourites_count": 3009,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 9544,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0033FF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/135861531/1431678704",
      "profile_link_color": "4A913C",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 15:00:17 +0000 2017",
    "id": 830793653832409100,
    "id_str": "830793653832409088",
    "text": "@hazemi94 02-12のポスト数：28 (うちRT：0)",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "hazemi94",
          "name": "はぜみん@エロサイト弱者",
          "id": 107930782,
          "id_str": "107930782",
          "indices": [
            0,
            9
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"https://twihaialert.net/\" rel=\"nofollow\">ツイ廃あらーと</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": 107930782,
    "in_reply_to_user_id_str": "107930782",
    "in_reply_to_screen_name": "hazemi94",
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 15:01:41 +0000 2017",
    "id": 830794008980967400,
    "id_str": "830794008980967426",
    "text": "@pn1y 02-12のポスト数：9 (うちRT：0)",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "pn1y",
          "name": "ぽんりぃ",
          "id": 322116499,
          "id_str": "322116499",
          "indices": [
            0,
            5
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"https://twihaialert.net/\" rel=\"nofollow\">ツイ廃あらーと</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": 322116499,
    "in_reply_to_user_id_str": "322116499",
    "in_reply_to_screen_name": "pn1y",
    "user": {
      "id": 322116499,
      "id_str": "322116499",
      "name": "ぽんりぃ",
      "screen_name": "pn1y",
      "location": "Tokyo",
      "description": "Pomupomu Purine is tracing a light.",
      "url": "https://t.co/jDBKJUrwp4",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/jDBKJUrwp4",
              "expanded_url": "http://pnly.jp/",
              "display_url": "pnly.jp",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1507,
      "friends_count": 1748,
      "listed_count": 104,
      "created_at": "Wed Jun 22 17:17:52 +0000 2011",
      "favourites_count": 98131,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 139159,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000161755793/zNTB1_Xu.png",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000161755793/zNTB1_Xu.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/769175347124314113/2udcs1WJ_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/769175347124314113/2udcs1WJ_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/322116499/1469986638",
      "profile_link_color": "1DB35E",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 15:06:46 +0000 2017",
    "id": 830795285588648000,
    "id_str": "830795285588647938",
    "text": "selnium-server-standaloneを入れたけど、これ入れる必要なかった感",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 15:07:18 +0000 2017",
    "id": 830795420750143500,
    "id_str": "830795420750143493",
    "text": "明日の準備できてなくてやばい",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 107930782,
      "id_str": "107930782",
      "name": "はぜみん@エロサイト弱者",
      "screen_name": "hazemi94",
      "location": "",
      "description": "プリキュアと商業成人漫画を楽しみながら寝るのが好きです。c# とUnityでゲーム作ってます。また，最近Web作成をやっています．",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 1170,
      "friends_count": 1401,
      "listed_count": 45,
      "created_at": "Sun Jan 24 06:44:02 +0000 2010",
      "favourites_count": 58559,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 49051,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/792235212193226752/ajn-pr-X_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/107930782/1460303198",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 15:07:54 +0000 2017",
    "id": 830795570193109000,
    "id_str": "830795570193108992",
    "text": "@hazemi94 なにがしたいの",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [
        {
          "screen_name": "hazemi94",
          "name": "はぜみん@エロサイト弱者",
          "id": 107930782,
          "id_str": "107930782",
          "indices": [
            0,
            9
          ]
        }
      ],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": 830795285588648000,
    "in_reply_to_status_id_str": "830795285588647938",
    "in_reply_to_user_id": 107930782,
    "in_reply_to_user_id_str": "107930782",
    "in_reply_to_screen_name": "hazemi94",
    "user": {
      "id": 135861531,
      "id_str": "135861531",
      "name": "kyasbal",
      "screen_name": "kyasbal_1994",
      "location": "",
      "description": "WebGL/Node.js    未踏2016 Grimoire.js開発者",
      "url": "https://t.co/rIxxaN4fqz",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/rIxxaN4fqz",
              "expanded_url": "http://github.com/kyasbal-1994",
              "display_url": "github.com/kyasbal-1994",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 332,
      "friends_count": 194,
      "listed_count": 20,
      "created_at": "Thu Apr 22 12:18:21 +0000 2010",
      "favourites_count": 3009,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 9544,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0033FF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/135861531/1431678704",
      "profile_link_color": "4A913C",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 15:07:59 +0000 2017",
    "id": 830795594142621700,
    "id_str": "830795594142621696",
    "text": "ティアラ2つうんめぇ https://t.co/YKkFvb1cQt",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [],
      "media": [
        {
          "id": 830795580750209000,
          "id_str": "830795580750209025",
          "indices": [
            11,
            34
          ],
          "media_url": "http://pbs.twimg.com/media/C4eULc-UoAEsA9R.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4eULc-UoAEsA9R.jpg",
          "url": "https://t.co/YKkFvb1cQt",
          "display_url": "pic.twitter.com/YKkFvb1cQt",
          "expanded_url": "https://twitter.com/funky_nabasan/status/830795594142621696/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 1200,
              "h": 675,
              "resize": "fit"
            },
            "large": {
              "w": 1920,
              "h": 1080,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 383,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 830795580750209000,
          "id_str": "830795580750209025",
          "indices": [
            11,
            34
          ],
          "media_url": "http://pbs.twimg.com/media/C4eULc-UoAEsA9R.jpg",
          "media_url_https": "https://pbs.twimg.com/media/C4eULc-UoAEsA9R.jpg",
          "url": "https://t.co/YKkFvb1cQt",
          "display_url": "pic.twitter.com/YKkFvb1cQt",
          "expanded_url": "https://twitter.com/funky_nabasan/status/830795594142621696/photo/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 1200,
              "h": 675,
              "resize": "fit"
            },
            "large": {
              "w": 1920,
              "h": 1080,
              "resize": "fit"
            },
            "small": {
              "w": 680,
              "h": 383,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 1274924040,
      "id_str": "1274924040",
      "name": "なばゆう@3/18fripSideSSA",
      "screen_name": "funky_nabasan",
      "location": "茨城県守谷市 ⇔ 東京都新宿区神楽坂",
      "description": "けやき/竜一/東進柏(暗黒の浪人期)/東京理科大理学部応用数学科/\n趣味はアニメとかアニソンとか野球、サッカーとか/アニソンライブによく行きます。南條愛乃、綾野ましろ、高垣彩陽、水樹奈々好きです",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": true,
      "followers_count": 228,
      "friends_count": 334,
      "listed_count": 3,
      "created_at": "Sun Mar 17 13:10:32 +0000 2013",
      "favourites_count": 7980,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 29221,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F5ABB5",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/525936807746105345/pl8o_hmt.jpeg",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/775019323593142272/44oTXt3o_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/1274924040/1482655391",
      "profile_link_color": "3B94D9",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "E3E2DE",
      "profile_text_color": "634047",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 15:09:22 +0000 2017",
    "id": 830795942789931000,
    "id_str": "830795942789931012",
    "text": "お兄ちゃんお兄ちゃん、今お兄ちゃんが作ってるプログラムにそっくりなもの、https://t.co/gTZ0P699dg で見つけたよ！",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": [
        {
          "url": "https://t.co/gTZ0P699dg",
          "expanded_url": "http://freecode.com",
          "display_url": "freecode.com",
          "indices": [
            36,
            59
          ]
        }
      ]
    },
    "source": "<a href=\"http://twittbot.net/\" rel=\"nofollow\">twittbot.net</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 493279568,
      "id_str": "493279568",
      "name": "プログラムを勉強している人の毒舌な妹",
      "screen_name": "PG_sister_bot",
      "location": "192.168.0.2",
      "description": "趣味で、仕事で、学校でプログラムを勉強している人の毒舌な妹bot。ハッシュタグ #プログラムを勉強している人の毒舌な妹bot で、良いネタがあれば追加する方向で。作者:@big_bros アイコン提供:すつるむ(@sutsurumu)さん",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 10496,
      "friends_count": 7842,
      "listed_count": 552,
      "created_at": "Wed Feb 15 16:47:14 +0000 2012",
      "favourites_count": 1,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 74494,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1887861869/PG_sister_bot_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1887861869/PG_sister_bot_normal.png",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "possibly_sensitive_appealable": false,
    "lang": "ja"
  },
  {
    "created_at": "Sun Feb 12 15:09:25 +0000 2017",
    "id": 830795955238690800,
    "id_str": "830795955238690816",
    "text": "CI上のキャッシュのせいか",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 135861531,
      "id_str": "135861531",
      "name": "kyasbal",
      "screen_name": "kyasbal_1994",
      "location": "",
      "description": "WebGL/Node.js    未踏2016 Grimoire.js開発者",
      "url": "https://t.co/rIxxaN4fqz",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/rIxxaN4fqz",
              "expanded_url": "http://github.com/kyasbal-1994",
              "display_url": "github.com/kyasbal-1994",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 332,
      "friends_count": 194,
      "listed_count": 20,
      "created_at": "Thu Apr 22 12:18:21 +0000 2010",
      "favourites_count": 3009,
      "utc_offset": 32400,
      "time_zone": "Tokyo",
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 9544,
      "lang": "ja",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "0033FF",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/406053335/4012108481_44758e3081_o.jpg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1125213720/OnLineGameEditer-008_normal.png",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/135861531/1431678704",
      "profile_link_color": "4A913C",
      "profile_sidebar_border_color": "181A1E",
      "profile_sidebar_fill_color": "252429",
      "profile_text_color": "666666",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
  }
];
res.reverse();
export function fetch2(url) {
  return new Promise((resolve, reject) => {
    resolve(res);
  });
}