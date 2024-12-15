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
    }
}

export default fakeAPI