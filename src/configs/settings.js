/**
 * Client Settings
 * @param { Client } client 
 */

 module.exports = (client) => {

    //General Settings
    client.settings = {

        Prefix: ".",
        Token: "OTY0NzgzNjk5NTAzNzU5NDEy.Ylpq1g.1ROxMjiiM1GFyS6OPYfz2VMJOnQ",
        Owners: ["728931818182541392", "889363583249563658"],
        OtherBots: ["964531911605239830", "964587652605177959"],
        VoiceChannel: "964525533968879667",
        Activity: "LISTENING",
        Status: "idle",
        MongoURL: "mongodb+srv://rencia:Vahap2020@cluster0.jxyds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        Footer: "Göknur",
        DisableCooldownsForAdmins: true,

    };

    //Activity Messages
    client.statusMessages = [

        "GÖKNURRRR",
        "Created By GÖKNUR!",
        "GÖKNURRRR"

    ];

    //Emojis
    client.systemEmojis = [

        ///System
        { emojiName: 'developer', emojiUrl: 'https://cdn.discordapp.com/emojis/853642013332865035.gif?v=1' },
        { emojiName: 'loading', emojiUrl: 'https://cdn.discordapp.com/emojis/857935194203226118.gif?v=1' },
        { emojiName: 'arrow', emojiUrl: 'https://cdn.discordapp.com/emojis/821298641863442442.gif?v=1' },
        { emojiName: 'crown', emojiUrl: 'https://cdn.discordapp.com/emojis/876942324909871114.gif?v=1' },
        { emojiName: 'crown2', emojiUrl: 'https://cdn.discordapp.com/emojis/876929331572662323.gif?v=1' },
        { emojiName: 'mark', emojiUrl: 'https://cdn.discordapp.com/emojis/876153262796079115.gif?v=1' },
        { emojiName: 'mark2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641429146140684.png?v=1' },
        { emojiName: 'cross', emojiUrl: 'https://cdn.discordapp.com/emojis/876153078863253514.gif?v=1' },
        { emojiName: 'cross2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641452227264522.png?v=1' },
        { emojiName: 'success', emojiUrl: 'https://cdn.discordapp.com/emojis/793774156067373066.gif?v=1' },

        ///Status
        { emojiName: 'online', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950275698692.png?v=1' },
        { emojiName: 'dnd', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950355390545.png?v=1' },
        { emojiName: 'idle', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950069915667.png?v=1' },
        { emojiName: 'offline', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950686609420.png?v=1' },
        { emojiName: 'web', emojiUrl: 'https://cdn.discordapp.com/emojis/825429354707288065.png?v=1' },

        ///Penal
        { emojiName: 'banned', emojiUrl: 'https://cdn.discordapp.com/emojis/748618263071555645.gif?v=1' },
        { emojiName: 'jailed', emojiUrl: 'https://cdn.discordapp.com/emojis/878303820181024788.png?v=1' },
        { emojiName: 'chatMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/878303318743609384.png?v=1' },
        { emojiName: 'warned', emojiUrl: 'https://cdn.discordapp.com/emojis/826369282942042112.png?v=1' },

        ///Voice
        { emojiName: 'joined', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545977794560.gif?v=1' },   
        { emojiName: 'leaved', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545168293968.gif?v=1' },
        { emojiName: 'unMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450633564271.png?v=1' },
        { emojiName: 'muted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710451086524416.png?v=1' },
        { emojiName: 'unDeafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450243502091.png?v=1' },
        { emojiName: 'deafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450138619915.png?v=1' },
        { emojiName: 'camera', emojiUrl: 'https://cdn.discordapp.com/emojis/839043294717542400.png?v=1' }

    ];

    //Guild Settings     
    client.guildSettings = {

        ///General
        guildID: "964520518218838097",
        guildTags: ["✦"],
        guildDiscriminator: "",
        guildTeams: ["964535784331948092"],
        meetRole: "964788263736991754",
        meetChannel: "964788711625719819",
        nameTag: "✦",
        dmMessages: true,
        unAuthorizedMessages: true,

        ///Staffs
        staffRoles: ["964521563967852544"],
        transporterSpears: ["964547887356846100"],
        registerSpears: ["964527453571776572"],
        staffGiver: "964521563967852544",
        botYt: "964787323994783798",

        ///Penals
        penals: {

            ///Ban
            ban: {
                staffs: ["964774904908120115"],
                penalPoint: 40,
                penalLimit: 5,
                log: "964775261944053782",
                banGifs: ['https://media1.tenor.com/images/ed33599ac8db8867ee23bae29b20b0ec/tenor.gif?itemid=14760307', 'https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif', 'https://media1.tenor.com/images/4732faf454006e370fa9ec6e53dbf040/tenor.gif?itemid=14678194'],
                unbanGifs: ['https://data.whicdn.com/images/192611812/original.gif'],
            },

            ///Jail
            jail: {
                staffs: ["964774904908120115"],
                jailRoles: ["964528290993963090"],
                jailChannel: "964775351291109416",
                penalPoint: 30,
                penalLimit: 5,
                log: "964775351291109416",
            },

            ///Chat Mute
            chatMute: {
                staffs: ["964774904908120115"],
                cmuteRoles: ["964527637726920714"],
                penalPoint: 20,
                penalLimit: 5,
                log: "964775435516919808",
            },

            ///Voice Mute
            voiceMute: {
                staffs: ["964774904908120115"],
                vmuteRoles: ["964776690427502622"],
                penalPoint: 20,
                penalLimit: 5,
                log: "964775435516919808",
            },

            ///Warn
            warn: {
                staffs: ["964774904908120115"],
                warnRoles: [{
                    warnCount: 1,
                    warnRole: "964776944363245589", 
                }, {
                    warnCount: 2,
                    warnRole: "964776954253422655",
                }, {
                    warnCount: 3,
                    warnRole: "964776954337300512",
                }],
                penalPoint: 10,
                log: "964775509294718997",
            },

        },

        ///Registration
        registration: {
            unregisterName: "",
            unregisterRoles: ["964526786530672641"],
            unregisterChannel: "",
            quarantineRole: "",
            familyRole: "",
        },

        ///Forbidden Tag
        forbiddenTag: {
            forbidRoles: [],
            forbidChannel: "",
            forbidLog: "",
        },

        ///Logs
        logs: {
            pointLog: "964775881463717888",
            voiceLog: "964775936480399410",
            messageLog: "964775995703971860",
            securityLog: "964776075387359243",
        },

    };

};