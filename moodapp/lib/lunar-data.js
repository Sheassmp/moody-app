import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const lunarDataDirectory = path.join(process.cwd(), 'lunar-data')

export function getSortedLunarData() {
    const fileNames = fs.readdirSync(lunarDataDirectory)
    const allLunarData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(lunarDataDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    return allLunarData.sort((a, b) => {
        if(a.date < b.date) {
            return 1
        } else {
            return -1
            }
        }
    )
}