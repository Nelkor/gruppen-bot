import { GroupUser } from './types'

const groups = new Map<number, Map<number, GroupUser>>()

export const incrementRatingOfUser = (groupId: number, userId: number) => {
  const group = groups.get(groupId) || new Map<number, GroupUser>()
  const user = group.get(userId) || { rating: 0 }

  user.rating++

  group.set(userId, user)
  groups.set(groupId, group)
}

export const getGroup = (groupId: number): ReadonlyMap<number, GroupUser> =>
  groups.get(groupId) || new Map<number, GroupUser>()
