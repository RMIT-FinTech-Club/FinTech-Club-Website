import ImageForm1 from "@/components/projects/projectImagineForms/Form1"
import ImageForm3 from "@/components/projects/projectImagineForms/Form3"
import ImageForm4 from "@/components/projects/projectImagineForms/Form4"

const fakeAPI = [
    {
        name: 'Technical',
        url: '/projects/technical',
        imgForm: ImageForm1,
        imgLinks: [
            'https://s3-alpha-sig.figma.com/img/5a8b/214e/a6b498b573193ac6714e8941407d3c4e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AlpQr3BnG5VYI058U561UK2JQXVO2BhmzW0mgN-xt0YQf6RzHuk~p8WAMryQC~u9a9emkF5Hrtvk0Y6NQqI~nNp19PnAkroLsSA6ckEfTFXYsP4OvII7DzgnMSSNNa6GUcmdPzUZhhdUzLi1nyCZy2M1eStwXaWzRQmSMKvvaSc7QtmKfo7xxs4zrvZtokYBtvPS~GRpti-icmHAXg6sUmJ1G2fpp1cTw2R08j6XNfHVS6Vc1XtelMhnFM6XlNnG4tXEOS0U8nj1WsbWF056YywIqmu2TeCM6sTRynQI1QcubSGTW~S0kAwKxEZMXP1OjnCnFKyQ5xzU7tqDYNv0CQ__',
            'https://s3-alpha-sig.figma.com/img/748b/f2ca/d38e05df8592e0485ed7f30e4eba4606?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E8OPT2O3Hd1b8abiemXiWaQ3dWpooaalFGkYjOCj0oFGDZAZwwpT7RuUAyuML1Efr~AsSnemVdOukI5dTmAjhOztcZczIGcb9NZ4JgAJoOCGHg5hrHImoUANKzBpYkRzYFTLnkxqnPcsV4tis0iFGA8AijgXlL2Z12NBEShrDhXrDAPdWeSjWVZ658psAUiQzdO0fqkN-b8l6r4dQcRjqe6YxgJzaMJ-SpmjGyLFIohog7V2TFsCsSePX87sDRPKzAAcBLIa65rKYl0--eJci-fuPrvsy1NO0ezDhu6mwHZ8hl177PF03MSGzjYI3he6o2~Iy5RGcnp3OtSh~zlDIQ__',
            'https://s3-alpha-sig.figma.com/img/49d2/d56e/b6cdfa032b13761edeb1e7c274a4e941?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hMIlwyjm1XfYXyophKDetbd6ixO9O1LzlahKS80I8pYLcaPNsh1n3TYj3wKQkNs4GRxjdKutJYy~s8oVL4oIoV8jNP2URVMsEUwmPH~HiHov1WduDRH31k3zEmaSIU7VoKs86Y2acoDlnTdkWFgiunw160i5Z~kdWxzFFLrR91cCxBz7MsXYtkn4c1XdZeOABpwlYPNqOK23bji9XyOMuve58sii6YE33BbyHmtgaFRrgFyFBUgnrQQRpRLwRmPfiR6hR~9~E69l3wrB6euEpjp3dNZ6yKIWLsn6qF5KGdwFv-uUsoOgI1criAX8qx93vzE1r1-Zyd~SzSLUPWJPAQ__',
            'https://s3-alpha-sig.figma.com/img/c349/43a2/e41e586e7b0c1a93c8c06f81df3e9b2f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M4m0QZTAogk4L61wJzc8teI0hcz3Sj2xEv0h4Lv40S9jvO-wA5W~My5F4oDPqCa0sBJ~3SXG2BCERRQa-9d0lRdv2pYyBd4BA2CPsfvwG1orw~FTaddt6Lhdl-~gyyJQYRYLpjj0TIO-ru0ZsD4N~ktDLWPAECoe7J5PcQ2BBdgQCHc9QSq~sjMqwjWWuEVuho1jg0xaWOCasr9ON7c05F65aRVxR0-~7MIlLWbrHjPK64AlqUjxaNjZq1Yh-onmN8~G1qXwU1k5hYg0rxcAx24hieUaCnpqsClojJ3Ubt9544FPIu0zcDpOkH7Ufrzj4EGNv6YIkTJ0IAwhUBwK4Q__'
        ],
        content: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum eros eu morbi. Nullam semper non maecenas turpis mauris turpis. Lectus facilisis mattis tellus volutpat eu ut condimentum consectetur. Enim sed egestas velit amet egestas turpis cursus. Aliquam purus augue mi cras donec cras. Odio id risus sed nullam nunc quis platea consectetur.d nullam nunc quis platea consectetur.'
    },
    {
        name: 'Media',
        url: '/projects/media',
        imgForm: ImageForm3,
        imgLinks: [
            'https://s3-alpha-sig.figma.com/img/61a4/1059/66172d65e0410301884ebc6124363995?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCC11vycKqaSbJHAp8i8rFsjNhciAFY8MXK5jBACJMk1bed76~K94NarP6VTYmB7VWzqCi9lpMzIug7jLMFhw3R~KFs43yFsPUW-XvLgalOXBonjAuZcmPV2GoD2MtYwaqGq3D6e4AcRwJZdaVOuANNAcPbgv49CPuMcIb2cCzOiY1wp~WVVghQUB5dQoWrb-Db8G7gQ5dFOC~W-Gcja3AzEtkSMfvNWpAxSsawMnye-RIVhBteBcv71WthVu0e7ZYnvDvpyVoORvJG76bTXft6~mLMBKWMqP09f5tsQhshuhv2jhY0Cjd~gBM9ia8TJHnqqs9BmXtlzFwqOZwaEAQ__'
        ],
        content: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum eros eu morbi. Nullam semper non maecenas turpis mauris turpis. Lectus facilisis mattis tellus volutpat eu ut condimentum consectetur. Enim sed egestas velit amet egestas turpis cursus. Aliquam purus augue mi cras donec cras. Odio id risus sed nullam nunc quis platea consectetur.d nullam nunc quis platea consectetur.'
    },
    {
        name: 'Event',
        url: '/projects/event',
        imgForm: ImageForm4,
        bgc: '#FFEFCA',
        imgLinks: [
            'https://s3-alpha-sig.figma.com/img/8d6b/37a6/4866ddcec58c4a6f9d3e3705359fc1bd?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jONwrfMPXTGoKbGRHeyHzDfuKipGfj8So402jcskPEMsWY3x6XlhAUzkLVDgwBzHW-BaUQGM69dRYcSywPm28ySuu2EoFkzLJcT~lUgA9bko5YYZ30Tn--mp-F23oqavz-i6B3j1AntAbrxH0SaP4febMMp3Xhg33Ep-xmqBFjdUpuQ4T~ioM4qt42~HlP9UroOtLtW4ZMRh3AhG7pmjpR2dtp~Vyh2th9OhVvpyPTAP5NfR8a1ywo-9AzQ8RHSEF-9hJ5jWNaT-GteAsGdpWhSR0u46zhsfnlGWk6oYfx3JuvBJQLHUIqSK4FS7qu6I2~fBEcbQd4bnoEtWg8zNuA__',
            'https://s3-alpha-sig.figma.com/img/740e/b219/b79eb7bb2ba4da6014821709c76155f0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlU1MGqbLkYaQj-NgmJlXuP3pSD68vOciTLrtJZQDUIiBSIY6d3JiqA3gsaVHFk9HYVGGwL7kglyRhRW~kqcHgRsKq-xoPTCLakiXJ3Txx-iw9Ftr2zIvcJGXhXzprSe8Dt6ugnYhwvJ-MjTFs~HcVo8SOkx1LYM6knjuwTG2uOuWs2xtG2zGV9hfUiAS2npgjks1C~LrSYW~~JwWUrxQyASfF9qn6pPtWeqQSfhOeQDUUztJselh7JDG0B51MCjl1aFqt3IGAl7RiEa66hCXKOKitnYdfiaTtDTQEF4vrf0rodHTImbzGZKlj-8QXIiR1E9pcep0DJCRSAlOo~PFw__'
        ],
        content: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum eros eu morbi. Nullam semper non maecenas turpis mauris turpis. Lectus facilisis mattis tellus volutpat eu ut condimentum consectetur. Enim sed egestas velit amet egestas turpis cursus. Aliquam purus augue mi cras donec cras. Odio id risus sed nullam nunc quis platea consectetur.d nullam nunc quis platea consectetur.'
    },
]

export default fakeAPI