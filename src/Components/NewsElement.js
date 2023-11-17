import React, { Component } from 'react'
import NewsComponent from './NewsComponent'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsElement extends Component {
articles = [
        {
            "source": {
                    "id": "associated-press",
                    "name": "Associated Press"
                },
                "author": "NAJIB JOBAIN, JACK JEFFERY, LEE KEATH",
                "title": "Israeli military says it has entered Gaza’s Shifa Hospital - The Associated Press",
                "description": "The Israeli military says its forces are raiding Gaza’s largest hospital, the site of a lengthy standoff with the Hamas militant group. The army surrounded Shifa Hospital as part of its ground offensive. Israeli authorities claim Hamas conceals military opera…",
                "url": "https://apnews.com/article/israel-hamas-war-news-11-14-2023-42d3e99d81672d166e720e7520796c41",
                "urlToImage": "https://dims.apnews.com/dims4/default/de81795/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Feb%2F12%2Ffc32809125d2cb8fe018c2e15a45%2Fc53109e2dd824b9caeb5f042234ee231",
                "publishedAt": "2023-11-15T04:07:00Z",
                "content": "KHAN YOUNIS, Gaza Strip (AP) The Israeli military raided Gazas largest hospital early Wednesday, conducting what it called a targeted operation against Hamas as troops seized broader control of north… [+7504 chars]"
            },
            {
            "source": {
                    
                    "name": "Yahoo Entertainment"
                },
                "author": "Jack Baer",
                "title": "Draymond Green ejected for putting Rudy Gobert in chokehold during Timberwolves-Warriors brawl - Yahoo Sports",
                "description": "Klay Thompson and Jaden McDaniels were also ejected for starting the brawl.",
                "url": "https://sports.yahoo.com/draymond-green-ejected-for-putting-rudy-gobert-in-chokehold-during-timberwolves-warriors-brawl-032145094.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/glI4J9J86LNOB3_.pZdEQA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-11/83083890-8315-11ee-97b7-9f1b8aa8ec2a",
                "publishedAt": "2023-11-15T03:57:00Z",
                "content": "Draymond Green earned his ejection during a Timberwolves-Warriors in-season tournament game. (AP Photo/Jeff Chiu) (ASSOCIATED PRESS)\r\nDraymond Green got ejected for taking matters into his own hands … [+2068 chars]"
            },
            {
            "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Annie Grayer, Melanie Zanona",
                "title": "GOP Rep. Tim Burchett accuses Kevin McCarthy of elbowing him in the kidneys, ex-speaker denies it - CNN",
                "description": "In a sign of how tense the dynamics are in the House Republican conference GOP Rep. Tim Burchett accused Kevin McCarthy of elbowing him in the back while he was talking to a reporter after the House GOP conference meeting.",
                "url": "https://www.cnn.com/2023/11/14/politics/burchett-mccarthy-elbowing-fight/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231114125218-burchett-mccarthy-split.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2023-11-15T02:54:00Z",
                "content": "GOP Rep. Tim Burchett of Tennessee accused former House Speaker Kevin McCarthy of elbowing him in the kidneys Tuesday morning while Burchett was talking to a reporter, the latest sign of how tense th… [+6180 chars]"
            },
            {
            "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": "David Morgan, Moira Warburton",
                "title": "US House passes spending bill to avert government shutdown - Reuters",
                "description": "The U.S. House of Representatives on Tuesday passed a temporary spending bill that would avert a government shutdown, with broad support from lawmakers in both parties.",
                "url": "https://www.reuters.com/world/us/us-congress-tries-overcome-partisan-logjam-avert-government-shutdown-2023-11-14/",
                "urlToImage": "https://www.reuters.com/resizer/GcGPO1a_1EFwQnBaBGOBO7TpS44=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7BFLFQHXPJLN5FC33QXTCTWRUU.jpg",
                "publishedAt": "2023-11-15T02:43:00Z",
                "content": "WASHINGTON, Nov 14 (Reuters) - The U.S. House of Representatives on Tuesday passed a temporary spending bill that would avert a government shutdown, with broad support from lawmakers in both parties.… [+3267 chars]"
            },
            {
            "source": {
                    "id": "espn",
                    "name": "ESPN"
                },
                "author": "Andrea Adelson",
                "title": "Georgia overtakes Ohio State; Michigan, FSU round out CFP top 4 - ESPN - ESPN",
                "description": "Georgia overtook Ohio State for the No. 1 spot in the newest College Football Playoff rankings while Michigan and Florida State remained at No. 3 and No. 4, respectively.",
                "url": "https://www.espn.com/college-football/story/_/id/38899455/georgia-overtakes-ohio-state-michigan-fsu-round-cfp-top-4",
                "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1115%2Fr1253378_1023x575_16%2D9.jpg",
                "publishedAt": "2023-11-15T02:04:00Z",
                "content": "Georgia overtook Ohio State for the No. 1 spot in the newest College Football Playoff rankings released Tuesday night, after back-to-back wins over top 25 opponents.\r\nThe Bulldogs are coming off vict… [+4190 chars]"
            },
            {
            "source": {
                    
                    "name": "Deseret News"
                },
                "author": "Emma Pitts",
                "title": "The realities and challenges of diabetes today - Deseret News",
                "description": "Nearly 1 in 10 Americans are diagnosed with diabetes, and about 1 in 5 people don’t even know they have diabetes",
                "url": "https://www.deseret.com/2023/11/14/23961108/world-diabetes-symptoms-type-1-type-2-prediabetes",
                "urlToImage": "https://deseret.brightspotcdn.com/dims4/default/1cabd9d/2147483647/strip/true/crop/3115x1778+0+149/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FWEvUgtcNMjCdNcI6CSxdAcU5Yx4%3D%2F0x0%3A3115x2076%2F3115x2076%2Ffilters%3Afocal%281558x1038%3A1559x1039%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F25084802%2FAdobeStock_130470296.jpeg",
                "publishedAt": "2023-11-15T02:00:00Z",
                "content": "Nearly 1 in 10 Americans are diagnosed with diabetes, and about 1 in 5 people dont even know they have diabetes, the Centers for Disease Control and Prevention reported. \r\nThere are more people diagn… [+3056 chars]"
            },
            {
            "source": {
                    "id": "cbs-news",
                    "name": "CBS News"
                },
                "author": null,
                "title": "Tearful David DePape testifies in the Paul Pelosi assault trial; \"Thought he was dead\" - CBS San Francisco",
                "description": "David DePape took the stand Tuesday morning in his federal trial and tearfully recounted his motivations - fueled by conspiracy theories and right-wing media - that led to the bludgeoning of Paul Pelosi, husband of then-House Speaker Nancy Pelosi, at their Sa…",
                "url": "https://www.cbsnews.com/sanfrancisco/news/david-depape-testifies-paul-pelosi-hammer-attack-trial/",
                "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/11/14/f0b1299c-f1cf-44ce-84d1-960140bf6fba/thumbnail/1200x630/2d00ca08a5343b8ea5b204434e147b00/depape.jpg?v=0468e1acbdfcea10e0b300333bc497c4",
                "publishedAt": "2023-11-15T01:56:00Z",
                "content": "David DePape took the stand Tuesday morning in his federal trial and tearfully recounted his motivations - fueled by conspiracy theories and right-wing media - that led to the bludgeoning of Paul Pel… [+6627 chars]"
            },
            {
            "source": {
                    "id": "nbc-news",
                    "name": "NBC News"
                },
                "author": "Phil Helsel",
                "title": "Stretch of Los Angeles' I-10 freeway damaged in fire won’t have to be torn down - NBC News",
                "description": "A 450-foot section of Interstate 10 near downtown Los Angeles that was damaged in a raging fire will not have to be torn down and replaced, officials said.",
                "url": "https://www.nbcnews.com/news/us-news/stretch-los-angeles-10-freeway-damaged-fire-wont-torn-rcna125236",
                "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-11/231114-la-freeway-fire-interstate-10-ac-815p-5290f8.jpg",
                "publishedAt": "2023-11-15T01:33:00Z",
                "content": "LOS ANGELES A 450-foot section of important Interstate 10 near downtown Los Angeles that was damaged in a raging fire will not have to be torn down and replaced, officials said Tuesday.\r\nThe fire tha… [+1298 chars]"
            },
            {
            "source": {
                    
                    "name": "YouTube"
                },
                "author": null,
                "title": "Japan's Economy Shrinks More Than Expected Amid Weak Yen, Inflation - Bloomberg Television",
                "description": "Japan’s economy shrank over the summer in the face of uncertainties including currency weakness, prolonged inflation and a cloudy outlook overseas. Gross dom...",
                "url": "https://www.youtube.com/watch?v=mNIS7AdVFMo",
                "urlToImage": "https://i.ytimg.com/vi/mNIS7AdVFMo/hqdefault.jpg",
                "publishedAt": "2023-11-15T01:05:09Z",
                "content": null
            },
            {
            "source": {
                    
                    "name": "Space.com"
                },
                "author": "Megan I. Gannon",
                "title": "'Bouncing' comets may be able to spread life throughout the universe - Space.com",
                "description": "New research shows how comets could be a source of extraterrestrial life in planets outside of our solar system.",
                "url": "https://www.space.com/comets-bouncing-seed-life-on-exoplanets",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/7Wmyx6edKnpZ6eoZd3BFki-1200-80.jpg",
                "publishedAt": "2023-11-15T00:59:41Z",
                "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
            },
            {
            "source": {
                    
                    "name": "Fci Academy"
                },
                "author": "Cole Behrens, Bethany Bruner",
                "title": "Ohio bus crash kills 6, injures 18 on I-70 in Licking County - The Columbus Dispatch",
                "description": "The Ohio State Highway Patrol has identified the 6 people killed in fiery, 5-vehicle crash on I-70W in Licking County that injured 18 others.",
                "url": "https://www.dispatch.com/story/news/local/2023/11/14/mass-casualty-incident-closes-i-70-near-ohio-310-in-licking-county-semi-crash-kirkersville-ohio/71578089007/",
                "urlToImage": "https://www.dispatch.com/gcdn/authoring/authoring-images/2023/11/14/NCOD/71579445007-ceb-i-70-crash-dc-01.jpg?crop=1743,982,x0,y45&width=1743&height=982&format=pjpg&auto=webp",
                "publishedAt": "2023-11-15T00:32:23Z",
                "content": "ETNA The Ohio Highway Patrol has identified the six people killed in a fiery crash Tuesday that involved a charter bus, a tractor-trailer, another commercial vehicle, and two passenger vehicles on In… [+9719 chars]"
            },
            {
            "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Ashley Strickland",
                "title": "Webb telescope spots the most distant Milky Way-like galaxy yet - CNN",
                "description": "Astronomers used the James Webb Space Telescope to spot a Milky Way-like galaxy that formed soon after the big bang created the universe.",
                "url": "https://www.cnn.com/2023/11/14/world/ceers-2112-distant-barred-spiral-galaxy-webb-scn/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231114112056-milky-way-illustration.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2023-11-15T00:00:00Z",
                "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAstronomers have spied an intriguing phenomenon in the… [+3930 chars]"
            },
            {
            "source": {
                    
                    "name": "The Detroit News"
                },
                "author": "Detroit News",
                "title": "Hundreds of Metro Detroit Jews stranded at D.C. airport by 'malicious' bus drivers - Detroit News",
                "description":"Watch",
                "url": "https://www.detroitnews.com/story/news/local/michigan/2023/11/14/hundreds-of-metro-detroit-jews-stranded-at-d-c-airport-by-absent-bus-drivers/71582002007/",
                "urlToImage": null,
                "publishedAt": "2023-11-14T23:49:54Z",
                "content": null
            },
            {
            "source": {
                    
                    "name": "CBS Sports"
                },
                "author": "",
                "title": "Duke vs. Michigan State live stream, watch online, TV channel, prediction, pick, spread, basketball game odds - CBS Sports",
                "description": "Duke and Michigan State head into the marquee matchup with an early loss",
                "url": "https://www.cbssports.com/college-basketball/news/duke-vs-michigan-state-live-stream-watch-online-tv-channel-prediction-pick-spread-basketball-game-odds/",
                "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/11/13/25e0b806-a603-4897-8a08-3cdaa3b559a0/thumbnail/1200x675/17e01d8c5f8e4ed18893e39a695dfd1f/usatsi-21867021-2.jpg",
                "publishedAt": "2023-11-14T23:45:00Z",
                "content": "No. 9 Duke takes on No. 18 Michigan State in the first game of a marquee doubleheader Tuesday night at the Champions Classic in Chicago featuring two teams trying to avoid their second loss of the yo… [+2237 chars]"
            },
            {
            "source": {
                    
                    "name": "Yahoo Entertainment"
                },
                "author": "Malathi Nayak, Leah Nylen and Aisha Counts",
                "title": "Alphabet CEO Pichai Grilled on Record-Keeping at Google Play Trial - Yahoo Finance",
                "description": "(Bloomberg) -- Alphabet Inc. Chief Executive Officer Sundar Pichai took the witness stand in federal court for the second time in two weeks to defend his...",
                "url": "https://finance.yahoo.com/news/alphabet-ceo-pichai-grilled-record-190222231.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/c_yn8iFUMaX6WzV0LsUlkg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/bloomberg_markets_842/6ff141017b59bb582d17337541856a25",
                "publishedAt": "2023-11-14T23:08:22Z",
                "content": "(Bloomberg) -- Alphabet Inc. Chief Executive Officer Sundar Pichai took the witness stand in federal court for the second time in two weeks to defend his company against antitrust claims that it abus… [+4320 chars]"
            },
            {
            "source": {
                    
                    "name": "MacRumors"
                },
                "author": "Juli Clover",
                "title": "Samsung Announces 8TB T5 EVO Portable SSD - MacRumors",
                "description": "Samsung today announced the launch of its latest portable SSD, the T5 EVO with up to 8TB of storage space available. 8TB is the largest capacity size...",
                "url": "https://www.macrumors.com/2023/11/14/samsung-announces-8tb-t5-evo-portable-ssd/",
                "urlToImage": "https://images.macrumors.com/t/i1eYSxJI3dw1SjJW4wnSECMR4Xc=/1600x/article-new/2023/11/samsung-t5-ssd.jpg",
                "publishedAt": "2023-11-14T23:00:48Z",
                "content": "Samsung today announced the launch of its latest portable SSD, the T5 EVO with up to 8TB of storage space available. 8TB is the largest capacity size offered by portable SSDs on the market.\r\nThe T5 E… [+953 chars]"
            },
            {
            "source": {
                    
                    "name": "YouTube"
                },
                "author": null,
                "title": "Anti-Smog Guns Deployed In New Delhi, Ranked Most Polluted City | Insider News - Insider News",
                "description": "Anti-smog guns and sprinklers have been deployed throughout New Delhi, one of India's cities plagued by heavy pollution.MORE INSIDER NEWS VIDEOS:Hamas Says T...",
                "url": "https://www.youtube.com/watch?v=724eiwQuRk4",
                "urlToImage": "https://i.ytimg.com/vi/724eiwQuRk4/maxresdefault.jpg",
                "publishedAt": "2023-11-14T23:00:05Z",
                "content": null
            },
            {
            "source": {
                    
                    "name": "Deadline"
                },
                "author": "Nellie Andreeva",
                "title": "‘Young Sheldon’ To End With Season 7 On CBS; Series Finale Date Set - Deadline",
                "description": "CBS’ No. 1 comedy series Young Sheldon is coming to an end. The Big Bang Theory spinoff will conclude with the upcoming seventh season, which will consist of 14 episodes. Young Sheldon will a…",
                "url": "https://deadline.com/2023/11/young-sheldon-end-season-7-cbs-canceled-series-finale-date-1235612167/",
                "urlToImage": "https://deadline.com/wp-content/uploads/2023/11/Young-Sheldon.jpg?w=1024",
                "publishedAt": "2023-11-14T23:00:00Z",
                "content": "CBS‘ No. 1 comedy series Young Sheldon is coming to an end. The Big Bang Theory spinoff will conclude with the upcoming seventh season, which will consist of 14 episodes. Young Sheldon will air a one… [+3352 chars]"
            },
            {
            "source": {
                    
                    "name": "Variety"
                },
                "author": "Elsa Keslassy",
                "title": "Ridley Scott’s ‘Napoleon’ World Premieres in Paris With Joaquin Phoenix, Vanessa Kirby - Variety",
                "description": "World premiering Ridley Scott's 'Napoleon' in Paris was a no-brainer due to the film's French DNA but it comes with a downside for Apple.",
                "url": "https://variety.com/2023/film/global/napoleon-paris-premiere-apple-sony-french-windowing-1235790441/",
                "urlToImage": "https://variety.com/wp-content/uploads/2023/11/PhoenixKirby.jpg?w=1000&h=563&crop=1",
                "publishedAt": "2023-11-14T22:39:00Z",
                "content": "Holding the world premiere of Ridley Scott‘s “Napoleon” in Paris was a no-brainer for Sony’s motion picture group chairman and CEO Tom Rothman, due to the film’s French DNA and its subject, the famou… [+4372 chars]"
            },
            {
            "source": {
                    "id": "nbc-news",
                    "name": "NBC News"
                },
                "author": "Jo Yurcaba",
                "title": "Texas school district reverses decision that removed trans student from ‘Oklahoma!’ - NBC News",
                "description": "A Texas school district reversed a high school’s restrictions on a production of “Oklahoma!” after a transgender teen lost his role in the show, prompting backlash from the community.",
                "url": "https://www.nbcnews.com/nbc-out/out-news/texas-school-district-reverses-decision-removed-trans-student-oklahoma-rcna125219",
                "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-11/231108-sherman-high-school-al-0845-73234b.jpg",
                "publishedAt": "2023-11-14T22:23:23Z",
                "content": "A Texas school district reversed a high schools restrictions on a production of Oklahoma! after a transgender teen lost his role in the show, prompting backlash from the community. \r\nSherman Independ… [+2314 chars]"
            } 
]


    static defaultProps = {
        country:'in',
        category:'general'
    }

    static propTypes = {
        country:PropTypes.string,
        category:PropTypes.string
    }

    capitalized = (word)=>  
    word.charAt(0).toUpperCase()+ word.slice(1)
    constructor(props){
        super(props);
        this.state = {
            articles: this.articles,
            pages: 1,
            loading:false
        }
        document.title = `${this.capitalized(this.props.category)} - Newsport`;
    }
    async componentDidMount()
    {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apikey}&page=1&pagesize=8`;
        this.setState({loading:true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedata = await data.json();
        this.props.setProgress(70);
        this.setState({loading:false});
        this.setState({articles:parsedata.articles, totalResults:parsedata.Results})
        this.props.setProgress(100);
    }

    previousPage = async ()=>
    {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.pages -1}&pagesize=8`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({loading:false});
        this.setState({
            pages: this.state.pages -1,
            articles:parsedata.articles
        })
    }

    nextPage= async ()=> {
                let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.pages+1}&pagesize=8`;
                this.setState({loading:true});
                let data = await fetch(url);
                let parsedata = await data.json();
                this.setState({loading:false});
                this.setState({
                pages: this.state.pages + 1,
                articles:parsedata.articles
        })
        }  

        fetchMoreData = async() =>
        {
            this.setState({pages : this.state.pages + 1})
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=${this.props.apikey}&page=1&pagesize=8`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedata = await data.json();
            this.setState({loading:false});
            this.setState({
                articles:this.state.articles.concat(parsedata.articles), 
                totalResults:parsedata.Results
            })
        }
    
  render() {
    
    return (
        <div className="container">
            <h2 className="text-center my-3"> NewsPort-Your go to news website</h2>
            {this.state.loading && <Loading></Loading>}
            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Loading></Loading>}
            >
                <div className="container">
                <div className="row">
                {this.state.articles.map((element) =>
                {
                    return <div className="col-md-4 my-2" key={element.url}>
                        <NewsComponent title={element.title} description= {element.description} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
                    </div>
                })}
                </div>
                </div>
        </InfiniteScroll>
        </div>
    )
  }
}

export default NewsElement