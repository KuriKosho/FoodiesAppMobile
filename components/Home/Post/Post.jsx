import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from '../../UI/Category'
import PostItem from './PostItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import clientService from '@/service/client.service';
import managerApi from '@/api/managerApi';


const imageMap = {
    pancake: require('@/assets/images/homepage/pancake.jpeg'),
    ber: require('@/assets/images/homepage/ber.jpeg'),
    chip: require('@/assets/images/homepage/chip.jpeg'),
    egg: require('@/assets/images/homepage/egg.webp'),
};
const DUMMY_DATA = [{
    "id": "01HST7Z4GF9DB07QPN9TN1FP9J",
    "name": "Jennifer",
    "avatar": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTERITExMVFRUWExYXGBgVFxcdFxsYGhoXGRodGhcYHiggGRolHRgVJTEhJSkrLi4uGB8zODUtNygtLisBCgoKDg0OGxAQGislICMtLi8vMC0vMi0wLS0tLS0tLS0tLS0tLS0vLTAvLS4tLS0tLS0tLS0wLS0tLS0tLS0vLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAMCAQj/xABIEAABAwEFBAYGCAIIBgMAAAABAAIDEQQFEiExBkFRYRMicYGRoQcyQlKx0RQjYnKCksHwM+EVQ1OissLS8SRUc4OTowgWNP/EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EACwRAAICAQQABAUFAQEAAAAAAAABAhEDBBIhMRNBUZEiMmFx0QWhscHhQhT/2gAMAwEAAhEDEQA/ANwREQBERAEREAREQBERAEREARefTDHgr1sOKnKtF6JYoIiIAiIgCIiAIiIAiIgCIiAIiIAiIpAREUAIiIAiIgCIiA/HuABJIAGpOijJdobM3+taewhet73RHaWhsuIgGtGucB3gGh71Sr82FkY0vsrzJTPo30Dj914oCeRA7VRlllXypGjDHE/nbLU3aezn2vNn+pdLL7gPtgczWn5tPNYg28SKg1BBIIORBGRBBzBB3FdVnvIk9SpPL5rL/wCnKvQ2PR4302aJtFeYZaI5Y5GOBYGHC4GhBcc6GoriH5Su27tqmuoHeOVf9J7cuxZ1G2prIQOQIr3lStlfGNKeLvkqPHmpOUfMtenxuCi+aNLit7Hcf32VX28seMJNfI/NUSzzt3U7q/JSEVtI3n4qxa2XUkjM9Il8rPe85ZbO8DESx3qu0/CcNM/iO8D0sl+k7+45/wA/NcNtvUPjdHJm06O3tcND3Hu7FW47YQdcwaHhUZeCplkp3Bs0Qw7o1NcmmWW8Wu1y51y8dx7fNdqzyx3idQafvQ8VbrmvEPaAdf14dnBa9Pq9z2zMefTbFuj0SqL4jkB7jQ9oX2t6dmMIiIAiIgCIiAIiKQERFACIiAIiIAi87RGXNIa4sO5wAJHc4EFZB6SNp7wsjhALbCXOGYhZSVreLqtIjB3UdiO7QlQ3R1GNui67ZbfWew1jH11op/CaaBvAyOzwDlQk8KZrKr025t1pJxTujadGQ1Y0d4OM97iqfHUkkkkkkkmpJJzJJOZJO8rvssDnaeJWac2zZjxxidkUbSS41JJqak5nnxUnBOAKaDgBkuaG7zTMr5tMRaMj5ZLO1ZqTomo7ewalfX9NRDcqUxjpHkNkc6mpywjw1KnrDEyOmZPMlcuCQU7J9l5upVjJPyvp44V+N2oDXYXgtNafv5LiZf8ACzLpGMP3gPJd/wDSUM7KP6OVpyrkfAhVONeR2pWdEt4hzag1BUO610fTc74j+X6LgnAgecDiYzudq09u8c1w3latKag1Hx/RFjXkdb6Ra7DbtRXP9/LzVjui9MLhnw/kf3xWb/TcJDhwHhUKcslt6zD9ofFVTg1yixVJUzWLFbqWp7Nzw1w/E1v+Y+ZU8s1slvJtDDyDR4UHnQrSGOqAeIBXo6PLvUl9f5PK1mLY4/Y+kRFtMYREQBERAERFICIigBERAFlO1HpAtl2W6aGWJlohdSSEkmN4Y7djDSHBrsTc21oASc1qyrW3eyEd4wYHHBKypikp6pOoPFjqCo5A6gKHfkdRavky++fTLa5WFsEMdmJ1fi6V4H2ata0HmQVnzpHPe573Oe9xq5ziS5xO8k5krrvW55rNK6KaOj2nMHyLTo5p3HeudkoG4Dtp+pVE93maYbfI6rNFXdVTlgYBqq/9PaN9eQ08l5yXs72RTmVU4tl6kkXS03hFEyriP3w4lUq975fO7C3qtJoBvP3j+i4bRaS41JLj5DsXlZ3UJdwHmch++SRgokOVk3HaBE0RszdT9krmtUo/rHlx90Gg8AuKzvIBdq5xy/fivOVoGuZUqJDkJJGbhRecchacTHUPL95r0jsrnaMHeSvmewPbnhy5bl1a6Odsu6JayXsZAWu9YA94Go8K+S85bViA7POlFHXcCJQ46Na5x/KR5nCO9e932YkAn1R5ngFw4pM7jJtEi+bIdgH78lOWCU9XjUU7VCQ2dzjkO/cFNWEsZq8V0yzPYAMgO9Z8tVRqw3Zc7ndWVnJwPnl4mnitUuh9bPATvijPi0LHbmtoxt9kA4uJqASK860y5rSri2ijfhjDS0NaGgkjQUA0Omi50eSMJvc+zjX45TScV0WNEReueOEREAREQBERSAiIoAREQBERAZZ/8gLQG2OzgBvSOmqHUGIMaCHAO1ALnR1G9YWy8HbwD5Hyy8ltHp9bi+iN4dJ54T/kCxaSKi4naLsaTR9/Tfsn838l9MJdmGd5XNF6wpQczT9VaLLYy6mpWec6NWLEpEM2yuOq9W3c4hXGwbPOdSooPNWOxbJA6hUPKzT4UI9mbtu52FjWjPOp3DSp+IAUvdWzBdo0nmVpdh2UhZqC48/5KbgsLWigAA4ALlzk1RzcIu0jP7Lsh7x8F3M2RZwqr02zDgveOIBcnLyszmyejeEVriINMjy45Z7+XJSA9H0XvO+XcajyV7DUopON7Mut/o7cKlsz3DgQ3yyoqjed2PgdrUcRh86Zhb49qoW3VxMka94b1wKtI1405pfqWQlZRrqtIBoaq4XPaw17TWme/MEbweRCpFggadHFrh3tPaNR4qVge5jg079CNFRlivI3Y3apm+XbNijG8jLw076ELqVb2KtJfEK/2UfiC9p/whWRetp578SbPAzw2ZHEIiK4qCIiAIiKQERFACIiAIiIDPfS/cxlhimGkZcx3IPphd3OGH/uLCbwspaady/rK2WZssb43irXtLSOR/VfzftddTobRNG7VmXbUkA94wnwSSuP2OsctsiC2cuzpZtKhufKu7/Zajc90taKkKr+jyzDBI/7YHgP5qc2mvmSNrYbOC60Sg4aewwZF5rkOAJyr2UXl5G5To9eC2wPvaLauKykxRNEs+9vss++Rv8AsjPsVHt+0Nsm/iWh7QdGRnA3wZQnsJKlrt2Ua0VnfUnMtadSdavObj2U7Sp6y3dBHmyJrTxLST+Z2fmufFhHrk6WCUuWefo3fLDjfI55ZIW0DyTkK1cK9oz30WosWfhyuVx2jHC3iOqe7Tyoq4zcpOyM+JRimiTAXNeVr6OMu36DtXU1V7aOarw33R5n9hdSdIoxx3SozK/7baYbU4tnnYHOxspI+metBWmRqKdnFWLZr0jPaRHbRibp0zG9Yf8AUY3Uc2ivI5kdtqszHjC8Bw4OAI81A2vZeM5xvczkes3zz80hkVUzRPDfRrMU7Xta9jg5rgC1zSCCDoQRqFwXlAHNIO8LNrhvK0XY6kgL7K49bBmGE+03e3m3Q7s1pItLZGNexwc1zQ5rhoQcwQpkUKLizBZJXMlfG7+JG9za+9hJFCOdMj2Kbs9sDo+yjh2bx+94XHt5CBa5HDI4gHflBae2lR+ELx2csslpmihjHWfQGm5uJxce4HzA3qZLdFNGnHLbKmbx6Po6WYH7LR5uf8HhWhcd02EQxMjG4Z9vy3DkAuxejghsxqJ4+ee/I5IIiK0qCIiAIiKQERFACIiAIiIAsl9NdjDXwSjIyNcw/eZUjvo7+6tVtFoaxuJ7g0cSs99Mli+l2CB8DmuMdrjNQaijg6M1ppQvaTyCWTRSthG0sx5yv8qD9FxW6+HvmkZY2B73EB8rvVyyAbxaM860rUgGpVdu29ZwH2VhbgLngnCcfWdQ0NaCvZxVzfG2xWSSQAVazxdoB40Xnzx7ZW+W+j1MeTeko8JLl/gr149LZ+taLxLXnPBFHU+ILcu0Lwsm1k0Z6z5ZGV1kjDMu3r18R2qeuTZUNjfbLYesGOle4ipaAC4ho5BUa8tq5XPOCkbNzQGuNPtOcMz2UCtULVUvZfgqc43dv3f5NCu2+2TiooCACaCn5m1NPvAuburXJXTZK0VD29hWX2e5JY4LHaTLEPpQJj6L1muoT1m0wnIEOAy3Ebza9h73HTFsmFho4OBNAHNycAT7OYI5HlVZsmJJ3H2NCy7obZO76f28jTGlVO9JKyPP2ipiz7Q2V+IMtMLsIqaSNIG7WtNVnu2lrfJJHZYvWl6ziPdNaDsNHE8m03rhwbaRximo2znvba1jCRCGvI1kd6g7Pe/XdVQ3/wBle4/WWmSIHe2zuw/mD2EjuXJfUjLHTqh8meEOrha0EtLzTMlzmupSmQ3ZA9Wwt62i3WoWdrICC1ziH4mdUUrRwxVOYyIPdqtEcfHwo5nk5+J/gtN1QTmPpIpYbbGdRV0b6cAXF7SeTiAuvZO94myS2Wj4XB2JsMooWk1Lg3dQ6gDLUgkacFpuo3dJHbYD/wALI5rZ2D1QHHDjFMmlrsiFO7Y3D9IiEkWVoh68LxrUdbBXgadxoe2ua5qXuTF2rizN9vpq2uccHR/4G/NaP6ENncEBtbx1pfVr7ug7qZ88Y91ZBeUzrQ6SUnrSDHlkKhoAy3ZNC/qa5LAILPBC3IRxMZ+VoCvw4qpPyKtRl448zuCIi2GAIiIAiIgCIikBERQAiIgCIiAzn0o3m9rmMbpkCO4ud4/V+B5rPrxvZ7IHyRE4mlpLCTTWgxAagYiR381onpOsVS1/Yfi0/FnismtvVxc6tPMHUeC8/NJxzX9j2tNijk0tfc49nQGusz3AYjbHMe6gqS4NLantrTtWg3zd5ms72N9bJza6FzSHAHkSAO9Uiw3eZbLaQyvSMnEjKa42MZWnOmKnMhX/AGcvVtogZK2lSKOA3PGo7N44gg71OXu/R/6U4uFXqv8AGe9qtLLXZJ7O0hkz4XARSdV4dTIFpzLa5YhULEb6uN7JCGiuQxDOrXb2kHMEaEcfFb5LGyRuGSNkjfde0OHgQuG07J2SZwc6NwcKULZH0oNBgJLacqKFqPNEeCkmmuGZbsDs9I+ZstKMjcKncXEeqDvOHE48A3PUKZtV0/SLxfA0EjqOcBxDGjXdkRn2rQ7S2GxWd8kkjsEbDTFgAaDlhY1jWtBJoNKlVnYFjuldapRhkmcX4fdZQhjfOvZSuiiWR8z+lHUYJpQrrkkXbCta2ps0RoPZAL/zetXsNVEbIXYyK8pWAkhtnxx4syA5zQRzocQ7+9aUy8Bz8CqNtN/wlsht7RWIYmTYRX6mQ5uFPcfmQFVCTur7Opri3FKvT0IT0lXNB9HdJWT6S5zRG0A4C1hDXitKV9Z2tesOKzK7bLJ0gLQ5pG8VBHHPsqv6RtN3RzsriJY8B3VwOY7LquGNrgDSnWbRcFm2Uskbg/A5zgague7XjRpA8lYs7jGjjwoylbs54bH0NwMskn8aWB7WRn1sUr3OaMOvVxtJO7CeCsMbKNaNaADwFF8xhrScLWtJ1IAqe06nvUftNfDbLZnyE9c9WNu90h9UAb+J5BVzn4jSRMYbLb8zFJbM59tcyIVJnka0DgZHN8MJ13AVX9Gx30XSAYqE5NFeoDuHF1dK+FFhWxLhG+SYjFITgZi0HvOPE5geK0K4w58sbnGrsYqTwBBy4Ci41GeUZbYs0YtJGUHOX1NWhkxNa4bwD4r7XhYR9WyvCvjnTzXuvYi7Ss8OXDCIikgIiIAiIpAREUAIiIAiIgI2/wC6xaISz2tWnnwPI+WR3LFr8uRzXOY5jq13DMHsW9qMvq4orS2jwQ7c9uTh45EciCFRnw+IrXZs0uqeF0+mYrdNmMPT5UJljcRwxMLfjGV5dFJZ5XT2ShD/AOJA40Djxadx17KnXRXu27JOs+P6wSNkoG9TCQWYiAesQSQ5/D1VBsu9hNCS0/vcVknvx1a7Rug8eW0n07v7nNDtzZRlM2aB28PiefAsBqPBesu3sFPqIZ53HTDGWM/E+SlB3FSMGz7Dq93dRSVmuWJnqtBduL+t5ZBVJx72/uRJVxu/b/f6KjFdNqt7xaLZRsUYLo4G1wVAOZr67t1dNaakLrsd69CQMIqTqdCdwru71Ny3xNE4stFnBYcmyxOAa4HKhbIQGO5F2e6q4bRYoycxK2u4wyO84w4KZKUuaJxThG0zqk2oLRV7QO/4ClSeQCkLvs4tTJXObha8NDajUgGpod2YB40Udd922VpBImkPAQTU/wACsLrfIG/V2WSgGshZGwAcSSXAfhURxt+RGXNBKoFJjstru5xbABLBWv0d7sJbvJhlOQB912XYu5u20H9bBaoTvDoHOHc6PECOa7DDabY8Y5Wx2cZ/UD1zuDZHgkjeXtAB0FamkqbkhA0PiapL6qzmNetFWtW3LDlZrLaJnUyLmdFH3vk/QLxuu5JppPptucHOY0mKNoIjZv6oOZ0qXHUga0FLaLDEzMMBPPNehs7pg5gyLwY2106wIJpwDcR7lxu/5iuyxJL4m/f8GZXHcbmQ2cPa4dUPJocy/rUrp/stL2SucuONw6o8+I7/AIV4hd937HhpBllx09lrcI8SSfCissUYaA1oAA0AV+HSSlPfk9ivU66Ozw8XufaIi9M8gIiIAiIgCIikBERQAiIgCIiAIiIDztMDZGljxVp1HmKEZgg0II0VPvrZ5zauzcPfaOsPvtGv3hz0CuiKJRUlTOozcXaMyjkdHSuYOjhmD3qUs84IyVot1yxSVNCxx1cygJ5kEFrjzIKrtq2VnYawvY7kasPhmD4hYsmla5gbYapS4nwegAIocwvKGxNZ/DMkQ4ROo0dkbqsHc1cM1tkg/wD0QyMHvYS5ne9lWjvIXXd97wSiscrH/dcD8Cs/xR+ha1fXJ1tdL/zE5/BB+ka/H2QPIMlX0z65qK8cPqg8wF7tlHFctpviBhDXSMDjo2oxHsbqe4I5t9shR9EdlKLxleueOeaX+DZ5SPekHRtHP6yjiOwFd9l2ekdnPLT7ENQOwyHMjsDTzRYskvlRLlCHzP8AsjgcTsIBe8+y3M04nc0czQKx3VdxZ1n0LyKUHqtHAHfoKnfQaLqsdjjibhjaGjU01J4k6uPM5r3WzDpVB7nyzLm1LmtsegiItRlCIiAIiIAiIgCIikBERQAiIgCIiAIiIAiIgC/CVF7R7QwWKF0s7wABk2oxO3dUE58zuWWy+l2W1Wllms8LWxvcQ57ql2AAl1K0yIB1AKAekHaS0uk+olkYwONcBII90CmmWtM6mm4KgQ3WDhO+gNd+YB1V8tcEMcXSWmbo8ZIaKFz3cw1ueR37lwRWeMloBDw4AtezLE01AJadDUEEZEEFZdQ3Lo36SocyXBBxWKR2RkkcOBe6nhVdt3ttFjtDBZw4GRrCY2OczpOs4AEsIPHOuVSdFZ4LA2MFxcKDOtPmpTZWazTySuZJjnjAqKOGFhNKtc4dep1c3IVAGRq7PijJS5NOfNCUKii83NbsX1bj1g2oJNSRoc95aSBXmFKLL/SLaRFYJTUtdVjWYSQcZcKDLUUxVG8VUHs96QbRZ2EynExozriczPQZkyRkmgBBe37IWnxtvEjB4DnzE2xFH3RerZ2NdhdG8tDjFIKSN7RvHMZKQWhNPlGdpp0wiIpICIiAIiIAiIgCIikBERQAiIgCIiAIiIAq9tJfroXtijAxObWp5kgAD8Lqk6UHGon5HhoLiaAAkk7gNVmd62/pLSZToHUz3VFAO5oFeZPFT9QQ+2kDpbNajI6rgyviMv1WcbCTxx26MynCx0bxi3A4cWf5SO8LTNqZKRTcHQkd4KxdsePAzXEWj4KKsm6LRe9qktEhtTgcJoGt9yMeoBwI38TXipa6ba+VzcGEPDc8RIDuDhl1Tma61141mrDdbeiod48lXY5Po9oDX7jSu4t9kngRkOynA1wazG0vEh2j1dBljN+Dk6LFeMcrWNMwYYy4Ygx5dXgKOaMiaV+VVwWCeRluZa482t/iYQcLm6PY0+2cO/TE0cMuiUm2TQWZtejLsT3Z0IbQkA6Gny4q/TXQwxYGtDaAYacv3RZ9HiyZEs2R8+SLNXnhhTwQX3Zm/pcvXpLRZ4GGrGVkNNHPIFO4MIp988FGbIw/SLVZ4jmOl6V3ZGOqPzvb4L09It3CC02do06F3kWBSfoniH0iaU6Maxvf13H/ACLfLHZ50cldGzWgsDetoNONeR1B5hd1inJ6rvWAB7R8xv7uKrEE5lnAPsjERuA3DvPwKl3zYXMfwcAfuuyPcDhPcqoXCRMkpRomkRFtMoREQBERAEREAREUgIiKAEREAREQBEUfft5izwueSK6Nrx49gFT3KUrDdEDtvfojb0TTnv7dQO7InuG8qoTMpDQ6+se06/vkoh9uM0+JxJq6ufjnzJzPaVJvlqCOIIUv6EIgdobxxWWQH1o2uaeYoC0948wVTdiLB0s+M+rEAfxHID4nuKltrX0hc4HMjCedVKbMWD6PZ2NPru+sf2u0Hc2niURL7LNG+iq8kmKfF70nkwfN5H4VMWm0Ujca7lXbJJ9cAfZYB3nru/vOcseultws9D9NhuzJ+hdLJPhdE/3ZGt7pKsp+boz3K5MlqKrPHyVilAOfRkj7wII8wrhd9rD42uGhAI7CK/qsP6TK8coej/k0fq+PbNT9f6KR6Xoa9FIPYdhPY4fMBfnookEdntUztA9x8Gxgd9VJ7aWfpopmby04fvNzb5hUvY+30s5hJwh09XE8KNpl25/hXr1weQa7sxXozK71pXV7AMgFLSPDgWnQgg9hURZLUwsb0bgWgAChqKDJeptCqlE7Ui23Vaekia4+t6rvvNNHd1RXsIXWqps7b8M5jJ6swqP+owZj8TB/6+atati7Rw+wiIpICIiAIiIAiIpAREUAIiIAiIgC4rzumG0ACZmMCtBicBnSvqkcAu1EBCxbJ2JuYs7PM/EroFwWX+wj/KFJIgIiTZewupisdndQ1GKGM0PHMaroFy2b/l4f/Ez5LvRAcLrmsxFDZ4SOBjZ8l+C5bMDUWeGvHomfJd6KGr7JTa6OT+i4P7GL/wAbfkvplgiAoIowOAY35LpREkug5N9s5H3ZAdYYj2sb8lzRbN2NtS2yWZtTU0hjFT3NUoikg4Y7mszSS2CJpOtGNHwC+jdcP9kzwXYiA4P6Hgq13RgFrg4EEihGhyK70RAEREAREQBERAERFIP1ERQAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgPxERAf//Z",
    "content": "Recipe to create pandy case !",
    "image": "egg",
    "timeOnl": "14 min",
    "like": "26",
    "save": "5",
    "share": "1"
},
{
    "id": "02HST7Z4GH9X0GXV7P4VG1CM3D",
    "avatar": "https://product.hstatic.net/200000325223/product/z2448801510183_2263357c23ba80c433204bcdc0cb2d19_056f2c250f0d4ab699b11e67dc809b48.jpg",
    "name": "Jessica",
    "content": "Hamburger with cheese ...",
    "image": "ber",
    "timeOnl": "15 min",
    "like": "26",
    "save": "5",
    "share": "1"
},
{
    "id": "03HST7Z4GH9X0GXV7P4VG1CM3D",
    "avatar": "https://product.hstatic.net/200000325223/product/z2448801510183_2263357c23ba80c433204bcdc0cb2d19_056f2c250f0d4ab699b11e67dc809b48.jpg",
    "name": "Harry Cat",
    "content": "Hamburger with cheese ...",
    "image": "ber",
    "timeOnl": "20 min",
    "like": "26",
    "save": "5",
    "share": "1"
},
]
export default function Post({data}) {
    const [newPost, setNewPost] = useState(null);
    return (
        <View>
            <Category title={"Posts"} />
            <FlatList
                data={data || DUMMY_DATA}
                // renderItem={({ item }) => (
                //     <PostItem
                //         authorId={item.authorId}
                //         authorName={item.authorName}
                //         avatar={item.avatar}
                //         content={item.content}
                //         timeOnl={item.timeOnl}
                //         like={item.like}
                //         save={item.save}
                //         share={item.share}
                //         id={item.id}
                //         image={item.image}
                //         key={item.id}
                //         name={item.name}
                //         title={item.title}
                //     />
                // )}
                renderItem={({ item }) => (
                    <PostItem 
                        authorId={item.authorId}
                        avatar={item.avatar}
                        content={item.content}
                        timeOnl={item.timeOnl}
                        like={item.like}
                        save={item.save}
                        share={item.share}
                        id={item.id}
                        image={item.image}
                        key={item.id}
                        name={item.name}
                        title={item.title}
                        />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({})