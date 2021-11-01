
export const clsx = (cls) => {
    return cls.join(' ')
}

export const cls_add = (old, cls) => {
    return [...old, ...cls].join(' ')
}