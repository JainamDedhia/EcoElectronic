import * as React from "react"

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className = "", ...props }, ref) => (
    <div className="overflow-auto">
      <table ref={ref} className={`w-full border-collapse text-sm ${className}`} {...props} />
    </div>
  ),
)
Table.displayName = "Table"

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className = "", ...props }, ref) => (
    <thead
      ref={ref}
      className={`[&_tr:last-child]:border-0 sticky top-0 z-[1] border-b bg-muted text-left [&:has([data-state=selected])]:bg-accent-foreground/50 ${className}`}
      {...props}
    />
  ),
)
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ ...props }, ref) => (
    <tbody ref={ref} className="[&_tr:last-child]:border-0 divide-y whitespace-nowrap" {...props} />
  ),
)
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className = "", ...props }, ref) => (
    <tfoot ref={ref} className={`bg-muted font-medium [&_tr:last-child]:border-0 ${className}`} {...props} />
  ),
)
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className = "", ...props }, ref) => (
    <tr
      ref={ref}
      className={`border-b transition-colors data-[state=selected]:bg-accent-foreground/50 hover:bg-accent-foreground/50 ${className}`}
      {...props}
    />
  ),
)
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<HTMLTableCellElement, React.HTMLAttributes<HTMLTableCellElement>>(
  ({ className = "", ...props }, ref) => (
    <th
      ref={ref}
      className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([data-state=selected])]:bg-accent-foreground/50 [&:not([align=left])]:text-right ${className}`}
      {...props}
    />
  ),
)
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<HTMLTableCellElement, React.HTMLAttributes<HTMLTableCellElement>>(
  ({ className = "", ...props }, ref) => (
    <td
      ref={ref}
      className={`p-4 align-middle [&:has([data-state=selected])]:bg-accent-foreground/50 [&:not([align=left])]:text-right ${className}`}
      {...props}
    />
  ),
)
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className = "", ...props }, ref) => (
    <caption ref={ref} className={`mt-4 text-sm text-muted-foreground ${className}`} {...props} />
  ),
)
TableCaption.displayName = "TableCaption"

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableCell, TableRow, TableCaption }
