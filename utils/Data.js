import AsyncStorage from "@react-native-async-storage/async-storage";

const FileSystem = require("expo-file-system");

async function getfile() {
  const list = await FileSystem.readDirectoryAsync(
    FileSystem.documentDirectory
  );
  if (!list.includes("profile.json")) {
    const d = await FileSystem.downloadAsync(
      "https://api.jsonbin.io/v3/b/6330cceae13e6063dcb58d54",
      FileSystem.documentDirectory + "profile.json",
      {
        headers: {
          "X-Master-Key":
            "$2b$10$9/BShtGqGj/Jq4OwbG63Su7Q5WxRZqZ3UaqJy0.lsNjCrnEt44n5i",
        },
      }
    );
    if (d.status !== 200) {
      alert("Error");
      return;
    }
  }

  try {
    const data = await FileSystem.readAsStringAsync(
      FileSystem.documentDirectory + "/profile.json"
    );
    return JSON.parse(data)["record"];
  } catch (error) {
    alert(error);
  }
}

export async function getprogressdetails(country) {
  const t = await getfile();
  const d = t[country];
  let all = [0, 0, 0, 0, 0];
  let done = [0, 0, 0, 0, 0];
  let titles = [];
  let ind = 0;
  for (let i in d) {
    for (let j in d[i].section) {
      for (let k of d[i]["section"][j]) {
        all[ind] += 1;
        titles[ind] = i;
        if (k.state == true) {
          done[ind] += 1;
        }
      }
    }
    ind++;
  }
  let result = [];
  for (let i = 0; i < ind; i++) {
    result.push({
      title: titles[i],
      pres: (done[i] / all[i]).toFixed(2) + "%",
    });
  }
  return result;
}

export async function Getdel(Country, part, s) {
  if (part) {
    const t = await getfile();
    const result = t[Country][part]["section"][s];
    return result;
  }
  return [];
}

export async function progressfun(country) {
  const t = await getfile();
  const d = t[country];
  let all = 0;
  let done = 0;
  for (let i in d) {
    for (let j in d[i].section) {
      for (let k of d[i]["section"][j]) {
        all += 1;
        if (k.state == true) {
          done += 1;
        }
      }
    }
  }
  return (done / all).toFixed(2) + "%";
}

export async function search(country, type, text, sort) {
  const t = await getfile();
  const d = t[country][type].section;
  let result = [];
  for (let i of d["Beginers"]) {
    if (i.title.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) != -1) {
      result.push({ title: i.title, url: i.url, section: "Beginers" });
    }
  }
  for (let i of d["Intermediate"]) {
    if (i.title.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) != -1) {
      result.push({ title: i.title, url: i.url, section: "Intermediate" });
    }
  }
  for (let i of d["Advanced"]) {
    if (i.title.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) != -1) {
      result.push({ title: i.title, url: i.url, section: "Advanced" });
    }
  }
  if (sort == "NO") {
    return result;
  } else if (sort == "AZ") {
    result.sort(
      (x, y) => x.title.toLocaleLowerCase() > y.title.toLocaleLowerCase()
    );
    return result;
  } else if (sort == "ZA") {
    result.sort(
      (y, x) => x.title.toLocaleLowerCase() > y.title.toLocaleLowerCase()
    );
    console.log(
      result.sort(
        (y, x) => x.title.toLocaleLowerCase() - y.title.toLocaleLowerCase()
      )
    );
    return result;
  } else if (sort == "BA") {
    return result;
  } else if (sort == "AB") {
    return result.reverse();
  }
}

async function addbadge(title, setbadges) {
  const t = await AsyncStorage.getItem("badges");
  const o = JSON.parse(t);
  if (o) {
    for (let i of o) {
      if (i.title == title) {
        return;
      }
    }
    o.push({ title });
    await AsyncStorage.setItem("badges", JSON.stringify(o));
    setbadges(o);
  } else {
    await AsyncStorage.setItem("badges", JSON.stringify([{ title }]));
    setbadges([{ title }]);
  }
}

export async function update(counrty, part, s, num, isChecked, setbadges) {
  const t = await getfile();
  t[counrty][part]["section"][s][num]["state"] = isChecked;
  const rs = { record: t };
  const m = await FileSystem.writeAsStringAsync(
    FileSystem.documentDirectory + "profile.json",
    JSON.stringify(rs)
  );

  if (num == 0) {
    addbadge("First lesson", setbadges);
  }
  return true;
}
