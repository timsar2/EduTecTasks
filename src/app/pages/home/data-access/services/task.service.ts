import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ITaskGroup } from '../models/task.model'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks$ = new BehaviorSubject<ITaskGroup[]>([])

  public getTasks(): void {
    this.tasks$.next([
      {
        label: 'Administratif',
        tasks: [
          {
            name: 'RDV Expo',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: '04.11.2020',
            icon: 'file_download_done'
          },
          {
            name: 'RDV Mesurage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'TVA 3%',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Permissionsde voirie',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Dixi',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: '',
            start: '',
            toDo: ''
          },
          {
            name: 'Certificate pour construction',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bestdesign',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Command Mirage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '',
            toDo: '',
            icon: 'import_export'
          },
          {
            name: 'Confirmation Mirage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: '',
            start: '',
            toDo: '',
            icon: 'import_export'
          },
          {
            name: 'Transport Mirage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: '',
            icon: 'import_export'
          },
          {
            name: 'Chantier Transport du depot',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Deliverd',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: '',
            start: '',
            toDo: ''
          },
          {
            name: 'Autorisation',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation Internet',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation commune',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation Sécurité',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation Eau',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          }
        ]
      },
      {
        label: 'Partnaires',
        tasks: [
          {
            name: 'RDV Expo',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: '04.11.2020',
            icon: 'file_download_done'
          },
          {
            name: 'RDV Mesurage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'TVA 3%',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Permissionsde voirie',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Dixi',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: '',
            start: '',
            toDo: ''
          },
          {
            name: 'Certificate pour construction',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bestdesign',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Command Mirage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '',
            toDo: '',
            icon: 'import_export'
          },
          {
            name: 'Confirmation Mirage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: '',
            start: '',
            toDo: '',
            icon: 'import_export'
          },
          {
            name: 'Transport Mirage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: '',
            icon: 'import_export'
          },
          {
            name: 'Chantier Transport du depot',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Deliverd',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: '',
            start: '',
            toDo: ''
          },
          {
            name: 'Autorisation',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation Internet',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation commune',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation Sécurité',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation Eau',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          }
        ]
      },
      {
        label: 'Autorisations',
        tasks: [
          {
            name: 'RDV Expo',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: '04.11.2020',
            icon: 'file_download_done'
          },
          {
            name: 'RDV Mesurage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'TVA 3%',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Permissionsde voirie',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Dixi',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: '',
            start: '',
            toDo: ''
          },
          {
            name: 'Certificate pour construction',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bestdesign',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Command Mirage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '',
            toDo: '',
            icon: 'import_export'
          },
          {
            name: 'Confirmation Mirage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: '',
            start: '',
            toDo: '',
            icon: 'import_export'
          },
          {
            name: 'Transport Mirage',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: '',
            icon: 'import_export'
          },
          {
            name: 'Chantier Transport du depot',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Edutec',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Deliverd',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: '',
            start: '',
            toDo: ''
          },
          {
            name: 'Autorisation',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation Internet',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation commune',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation Sécurité',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          },
          {
            name: 'Autorisation Eau',
            subject: 'Tree Removal & Fill up hole',
            description:
              'Oak Tree facing the Kitchen window needs to be removed. The hole left will be filled with sand.',
            responsible: 'Bettendorf',
            start: '04.11.2020',
            toDo: ''
          }
        ]
      }
    ])
  }
}