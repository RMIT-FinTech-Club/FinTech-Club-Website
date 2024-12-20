const fakeAPI = {
    contentSection: {
        title: {
            normal: 'Event',
            highlight: 'Name'
        },
        content: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum eros eu morbi. Nullam semper non maecenas turpis mauris turpis. Lectus facilisis mattis tellus volutpat eu ut condimentum consectetur. Enim sed egestas velit amet egestas turpis cursus. Aliquam purus augue mi cras donec cras. Odio id risus sed nullam nunc quis platea consectetur.d nullam nunc quis platea consectetur.',
        images: [
            'https://s3-alpha-sig.figma.com/img/9de4/b577/87cdd07c8f4f42c4cb9486e12daaced9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oqzke5SIhF4RGycZwBHPpiqymy82oFZ~6JheyPxuaY7AR2bd232hRqS57a5fgzlTV05iVcfMQiG-fI5Wyz7feMU17LAWXRXCDz2AlY-zhtiIyQZLlOxzP6c5A0G9cw33prqOIcA3pacmezJs7WVV9Jk5T1PghDcEgt8py5Zl5RqMiwwIpQTtWFg~iCO8vVlmG1iNeqh7O5dtPL5FU6WSX~eI1HqkEAHiOa84JBeDHGTp~DgMdaeBlHk2yQlOAoT3iN4a6iYiawTR4r392R6gDSJIdez1Do9S78kSfS-y24Kf8lpZw8Y5aaI52dLv9AppCFHrcrE-mgaqiAl3eRplvQ__',
            'https://s3-alpha-sig.figma.com/img/a8ed/32cb/6979a318f407a9b9291b1b8f8c143cea?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vh8dhw6SKO78K-SpErofJHl4CYE4S-4Y-y2oJ9NtEDnq3qZrf5y1Jg-2~SNW28KWS6h0Fhg1YxgfzTnPgItqgqk3zoVdAAHpictfYBM5K71AvkTOjMYf7vnzNfzmXh3BF1lwOO3J0Ix~aJFYOh5r5E3oPNUBuaxiPvOh-gvOfGShi4nQWGpEO8mltAbmdHLNXKo8~hO7r93yrz3MZqCo11BxahFqGhkDY0aZ23d9cLU9bQBStbrMfAwcC9UT2NmePvOC2H3HofiMzUkQUuF7cGoYSg~DTR3B4zqJ6qAGjXh~CnFwFELNNGnXtnrxmVgcgYuwkC0rLAqdAzRdMYkJPg__',
            'https://s3-alpha-sig.figma.com/img/5e33/95db/85cf1dcf5d1fb03f3eae02f91779770e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipZFysG8212u~8ZcPsvBNBC-5QytXyPMylkaCBGWFNWtWe6pzsv3AGkVoLYUB8hZs-YkBXcy9fgEd~9Shiier2qSGrgKO8if2ru317ih6TT63G-Ej~3V~hzqVOfe7QSx9I4u5hM27XeNR0D4jTc03bqylCdSVPIe2hY9sUbe0T5YW9XFh5IX~UZyecR3VOCFAkxdcvbSyapS08FYmWtHbWhJRzYMSXD3kkYyoyD~R~iGJxdew0AWlnwq8Sl8l~paUUPJ8GkqZvrhRVXgKMOs0UTirG51n5DSXlvJ20Fm8StjDlBw-mxu52Ff51DILjOnXV3Mef-vJ0RKuItchKSDIA__',
            'https://s3-alpha-sig.figma.com/img/9e5f/9e9a/02f81a0f55dcd2ba2822b1f1cb7d674f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XrAAGm~0vERGv8PAeILk3hH3~0OODV-5VLO9vsDK90NnxGBRfHbON63Z1ObYgKpN9MZlS771YsdInC69b2c1KTogYP5IhsiR2sUskniH8iwrAi5-GA7P2ky-vWQ7PtI0Dicsuh-Q1Ui8DrR39iH5kOwFsiPEaF4Hg3tu8XFG7sOq6MgqYXM0U-UsiIz8AMjHWSeoo1sDaIEjN-x3dyFyGNU4dOYHg2Ds9kSqStgw8YTTaa7Q8B54zQfT4xioWYyrCDWBEBR7HeagPoIxgJ3jY1EjRT6t0aIZzr~91Yx53cHI7RDVvx8K2u7lRb6mEWxEyAxdlFcPHmhpX8uhBuGkwg__'
        ]
    },
    sponsorSection: {
        images: [
            '/projectPage/sponsor_1.png',
            '/projectPage/sponsor_2.png',
            '/projectPage/sponsor_3.png',
            '/projectPage/sponsor_4.png',
            '/projectPage/sponsor_5.png',
            '/projectPage/sponsor_6.png'
        ]
    },
    teamSection: {
        team: [
            {
                name: 'Rajvir Gillon D.V.M.',
                role: 'Project Leader',
                bgc: '#CFEBD1',
                link: 'https://www.linkedin.com/in/nguy%E1%BB%85n-m%E1%BA%A1nh-d%C5%A9ng-598173262/',
                image: 'https://s3-alpha-sig.figma.com/img/1906/49a9/a9a5a64947037c051dbddc51e716aa5b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AR07~vECw-AL1uuh1APXuQHWqgOY31tsbRwyflIB~CO1jzICAhsUr83LD7N~qqvR3c2XigPvfwd61Vr~H9K8qAaNShpEtDfGZjCHtpk4aWYXNQOlp~inJREuMYggE0Etd1C8nHCA~PqnzJK6Rns3cb0V-bj1j-bCp6YZz7tVLmMjkTYEiVkAChDAJEoLM9F10lEmKhzepUY86Cm8Lgkjfv8o3aj61RSslnO4GsCAPXLvau8az9Q-SUxXgyDd1DQAbGCa94aEn4V17Z9-9BcoRwzfh3A~qWuGm0YKRQlBpzYzQp7sUWzDs0VizsoirDM5TZE08rE14kRJNGPRAwOaow__'
            },
            {
                name: 'Emily Shani D.V.M.',
                role: 'Project Assistance',
                bgc: '#E3D6FF',
                link: 'https://www.linkedin.com/in/minh-hoang-9229a62a4/',
                image: 'https://s3-alpha-sig.figma.com/img/8d7a/1c09/c9970f7ef99e78a5124424e70696bca0?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XGOHCBrgO3gpno0e8GP4bC4kM9URqNrFRJmfoDY48GuRq3oO9n7-fcTyx4QiLylp-4xuhGfD9GFohPRE05mK2xsOVz-zJSOU5s8OIaZjyL0O0daoGhaXmGZr~Cvv4SwbtHwM5G~TGTRX-tLIjDuj2-sl196v70ksJSEB3qxeqnUdowsxOh09tZy75RhZlhV2ryqWl6w~UM4LlKAOnDzEdHyeji79pQpxkCn2P~cB42UXiJKJn91X0j2mYAelLVuQzw27-8h5njm1X6G9oyv~~NUVgbkO2efW~Dt2BTlv6q1vIojM7DrBZRQJSua7FiIDFPdskMGkuhtZYMCg27XRQw__'
            },
            {
                name: 'Bock D.V.M.',
                role: 'Marketing Leader',
                bgc: '#FFE9BD',
                link: 'https://www.linkedin.com/in/tiendangtran/',
                image: 'https://s3-alpha-sig.figma.com/img/11d3/510a/d8e9e42d42e48cf9de9a70ea20e36b8c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cRZW4L4sGIKQ9yOTrghTOtvkUYTVWrcWKOS6J3Np9EWva4O0Wbx~C0xpu3LD8jKnyBIe713eEBXvxDPt7JIz15eEVCEK7RkeEKa1W-xUhYPPUQOzx1kea2Pkn-ZfbTyCV~1bk7oadtSjR~mOUax~FHoCTbf5iXP8a7-4A0Z~bzlQ4lkcaDxTJKrMFaAQ0cpWdI6DhguSYjKs3kC9--9p74OsnZ1Lh1jKy5Oon-AubaZHnHGcYeqtxiVDdtPc2Ek8ZsBKO533tHf4XXjVKzuHy9ECSfsWh31OQlCXyErLpWaSpaMgIO6pkIU5OP9sKvrVj-KzV1IkleBrNxKw6C4lPA__'
            },
            {
                name: 'Cyntha Williford D.V.M.',
                role: 'Project Manager',
                bgc: '#CEE0FA',
                link: 'https://www.linkedin.com/in/minhpnh/',
                image: 'https://s3-alpha-sig.figma.com/img/3763/86f3/4f99e4f53e25fcd1345f67f63447b74d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lHxCzEYGYscNS~oOELTS4-wt~VkQmTCEGz4A8y-LjSSieuYN9N1MNbXbaOalC6zgAbRe0BzjRrzXSjkjd-Wph8~lrHJCAs4L6mP8mymBuWM5gmUXAJ16E0syLqLmcc6ilgWs8070HH134qE~EsegskBlTzF3JpLp5M4abAyO64m2w9Sea~9Itvf9mhwRd89b6b5zcugx4qDXdzF0LjJSXV3K~nPvMDz3o2gmcMWV0EaM-4LuD9zLvDKwegsI6qRM8vEr58FVcL4vxSBh088Unr322Pkm-FfuJopNG80LNFcNcJGdcjLuQbdEjEnzxbDIvs641GsHZ4FriY9VxrEj5g__'
            },
            {
                name: 'Done Williford D.V.M.',
                role: 'Editor',
                bgc: '#F8BFE1',
                link: 'https://www.linkedin.com/in/qu%C3%AD-hu%E1%BB%B3nh-l%C3%AA-di%E1%BB%85m-a0473424a/',
                image: 'https://s3-alpha-sig.figma.com/img/8227/3faa/8dbfdaf7eae94b806f53cc082f6f28ed?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MdjVBPTa8GsNXZ66-UlAzat~vLVVXCRgmoFsiaCX4~vJebgUsM5Hz6i-ESTUNP8zcNRuRFW-1dI6zKPyx07vnZMl7zGu~BXxeW2u4QEFrtPtSo3aY90UzLXF-iugQv~ySHh5S62l9woDPIp-z1xfUd6auuCpEwKkYvlsptFCFBePW-wQfnwe3mCmsTCtHvW~hwLtgOyzDDNStXg-mAGZOuekdDqdg7oh7TO2BsSc1kqv2WpvZAsUm2F109IKaMguyV5XDTL4z5hdg4oybJhRJWN-XOHGJem9ADG6wBcP67cdTkaMRlhAVgjfGUNUG8uYrGxvDyhSqaES~95vRA5lsQ__'
            },
        ]
    },
    participantsSection: {
        participants: [
            {
                image: '/projectPage/participants_1.png',
                count: 25,
                description: 'Guest Speakers',
                addOn: '+'
            },
            {
                image: '/projectPage/participants_2.png',
                count: 380,
                description: 'Participants',
                addOn: '+'
            },
            {
                image: '/projectPage/participants_3.png',
                count: 6,
                description: 'Online Viewers',
                addOn: '.5k'
            },
            {
                image: '/projectPage/participants_4.png',
                count: 10,
                description: 'Media Reactions',
                addOn: 'k'
            },
        ]
    },
    gallerySection: {
        images: [
            'https://s3-alpha-sig.figma.com/img/377b/5512/039a05f637462d4761e7d50c74463ccc?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRMK5mgmSyMoTvvVal6rbSCwDFaZcCtRqXaoB4UcyPcx0gPcLP3o1gutWVTGl7BmWhF~cdL9jZdbOIOMZTO7XdaJ3V3Y2t-LQTH3pZOVme2iYIyIyyajnN7v50hkEx8tvzaFgVqO8OUU9npECBnr4bE8e8lxrWKrkPQGp-lda1NAJmYLxmGS7nVrY9BtEJ-Z4oy8Jg1mwjoFZWdRTqPGfLHANJ4B~z~m7XhWd51NJCPI925XbuENvgBL8mBI8Ie0B0DGPD8WApAUjCxIh4iz5OZMWUib7M5VehqU-mfBe6hDCMzSOPdNR-ES5K0qokw3cN5Dy2CPWCRW5pEpBE6ccg__',
            'https://s3-alpha-sig.figma.com/img/56b5/de7b/e3a3ec7609583ea8dd65c5d45ecde07f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C-wHaEs4f9GATSEZCVa80q7jF-jplWUnBm-GzzIk1VkbWNuYM~rgY725STGAaZHmkK0ew0-WpqLE~nXJmz85YM2k5ssx8ZXt77nIcuOHHAlS5KCW30vURaVynxKj9JoporkdhOFAnMsGdSoNRKEFWI2~knyJKx6hVsHOva5ej3-kZEaUQ~0azwdYmS7TXcsPUMqbIBSt29p9QAWTR1MaNL4H50NLUafvjrGE1tMvTQl4eiK0w5~PyT0zQgJsZgTi0AmQC9eGfEG1sxsegA81Lj-zFagkR5kAgWELKchsnU4zQNWAKVtU-HhX5JV60Qz-aKPvlShQEg5fH7nZJL2-sw__',
            'https://s3-alpha-sig.figma.com/img/aab9/df30/73840f309d1b766fd373ba027d0817db?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DwCedZMfQQbo8q4mHKXxaWNW-aGoDJ7FhN1ZqtSiKFbXkknXHZKOzSlV4bSrbueieup82jtye4zuwL3fxq0WjPxUWC6ESniRSSQ~3CoifpJBoWXfezO275i4GuZPT83hPmTjodDETv7KNikQUJ8fq~9DN1ijTixqZYEvZe2KDDrJBw5Ia3zT8Xr1p73oVZCPTKUtDaoBwIAM77qq74oYbAKVH1u~hkHHVcWHTeCoF8-RPHwApl1HV6vjZQJOJC9G-s~d4KSOS3n9lBL-DF5Xk4Azmzve7UHMfwOegfmiBJxuKlkIsUqRhfuSqVQiYpPtUtlIsjOlbzsWfVygOk2J~A__',
            'https://s3-alpha-sig.figma.com/img/f038/faa2/cf7ef02132d97428045b73b462de6aba?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RwXUozkx4Nk-~PHyMjzKPzPePmmlXgquPY5Fk0CrfaDbxaj1eQCxXLYtL0VahiMLIM5iUYzqwg7NjF5hm99tEr30Z7HNlxaJf4DQu2v4300hoYOr21wCqUrKn5sZQHsWViB~l9jDfg3s8tlHi9adPnf5cdlnRrhMSWSaycyFFN77T-XAsy9JGIPpRAGqA2VUY8klrUsKo3JKlDmHL38a3LXvi2KwEhkWRuOf7fM9WY6U9ogY7jELNQbzC8WDPB6vD0tfnGJbMSxjTOePmmavf--RfzfpsOqZT6zhr7dtctbLTAdd4KYxuPB~mwboOh993GpvSOWWuS6p2FY1IiMWmw__',
            'https://s3-alpha-sig.figma.com/img/20f4/ac55/8b5f883c3e6b80af878eba9a01cb4646?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cSUk5BwOkL5R4Ng4VAeIm8uLsKemula6RxwRs-GAK0klkYeLWlrxnN5Ae7DugH4FvPwYijAt1sEYmRlHa8rNBr~XI-iniDL-pWXma4UqzjPLiMApHEeBiGn~XSVNWu1ZjCrUWGpRVaQbX8jOhhHvGNDgydImHv9yawYcJMsfNcrzP6Ia0CmDKHc7-C21NQu3Ua2Dyb5KoZGtzyeaRb~lTaXuyEMi1t3qTZRR-PuQ47TgDQIz70EsHsIOfxY7vUaAkVczhcW1OCsW0RoQs6ldMdGf48TcQYHvcGBicbCLtnTPvxFpSvqRC07nGhoPM6SQPpxOA271SxsuHge2nQfEHw__',
            'https://s3-alpha-sig.figma.com/img/a786/ae0e/ef9306864f0f0ca4ab3c9c177f07676d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAqO4mWd3PYYrkHkRZQTZRT~u0UDrrClrlv8j9Inx5SG3pN8i39d5m5XKdqPGgeAvOuxevsISsVu6D4PJlc9aOiYksZgU39oQrLERM428WBKD1EBbfKExqNCCWCQG6NFPLkhSjoap4jV6exDHqfmIbAt7evvNQbuwelXQ~f4pv7bcZwUY0vjQ~0ZdAkb-qyVErcX8BJZWsK1e~LmJ0t14b8WzQzwraEkz2ybE4LbeJ49098gxS~~bqz9h3Gt9~PgDWQs0l6aDMbW~3ODi1aOAmZamOP2oDGbrlLIYaSIFWzkH~yzAat~cnDYObR60X2a244n-Mm65LjqyVz0paH31A__',
            'https://s3-alpha-sig.figma.com/img/b4ea/1fdc/1db03ecb975aaf69320d9f761265bf49?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m4~4KZ6LesfF0gd6JhpaOBAMadzAPvfk7pSjghnqUKeKxO6nNSp8DwkxtZ9mvcqezYhN4HnG7ulFBkrdb12~vqp7-zcn99R80bXUaf1gftg1kOw1FUe~049hNXDWdPMay~O1N8Ap6udYMwIkB-KgyadsLQrgSWkOxEhIgXVLWkzaHLf2vXevqkAAmvCvr3PVYwxuRbO~wm1mmWE8wArxU8ZS2Y3ZTfO1a-x4N27e5evKw5QsMnEOClv6ufRMwcoPargP5madxh6VajhfnldwhDRUK8kZJi31TUDrGxVn1BRUT2skyHto17ULnEtxTK7UbzcdTCmqraC5Yq4KGSIoZg__',
            'https://s3-alpha-sig.figma.com/img/fb47/e5d0/85483434d57cd5b1210440736a7597ae?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rv3s1EraZSDapjaG2lxQgjFkiGJ3~L~0OrwuPRDk9yvD-7rosLfx6TncuEHLZQTZ0LuxJcFHzFyNxQD6hm1q-kS2JFVwtsiuupwAibUSQwp1aTASbh8PV3ZnrhQA1GXuCj1pqPc7AFsrHrOmPRrui0E6jXdIEkQKwEGgJGnG7KFEa6-zNCsOlO39RltQh8eaBys20Px3c0FXVnr4TLWzlF5JzyGkU8xlIx1pGkoEIT2SZQq4MfGQ3TvZmXmjqwmoj8wEROI-PUNh0RCpxEEEZ58NoTzM1uEzSTWedQKmcDavSjlDR87KktioBhmnZ5VY--iLfMTg4pCxpEbyD5MYWA__',
            'https://s3-alpha-sig.figma.com/img/081f/2c55/3c770fc33c775894bbdbe32a4bbb04db?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6rQGNWlQYN9OfvSpnViJFvsUwjPbHAgTmdZeCa4xIb~I3PhgqmdnPBNCVE8-6I-6Nt-2uZhWbLpyWT3cJr2fnnO8bGRiSHmIA8QCTVVXVbgek1WVsPVMDPO3bhLyyegkmPlTVJ1uX8Ze6hqoCVCCaBxZnW21On4Xd5uRMSYA~nfLv3~thNaxV2PLEWypZ49tdMu3Ed0PcuS5iL9eQ-joqq0Tnvgx3lKFbe-x3088Q1YcqYjxK9KiC-NAmNndDBW3I0Nx4nxZNNfjsvEwivRkXD1u2kxKJYm4~cdtrtoVRaKUCMe38FKooJ8OR4pXpvL4gbrI8rqnGI9wSqOPhPV1g__'
        ]
    }
}

export default fakeAPI